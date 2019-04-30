require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const Sentry = require('@sentry/node')
const validate = require('express-validation')
const Youch = require('youch')
const databaseConfig = require('./config/database')
const sentryConfig = require('./config/sentry')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'
    this.sentry()
    this.database()
    this.middlewares()
    this.routes()
    this.exception()
  }
  sentry () {
    Sentry.init(sentryConfig)
  }
  database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }
  middlewares () {
    this.express.use(express.json())
    this.express.use(Sentry.Handlers.requestHandler())
  }
  routes () {
    this.express.use(require('./routes'))
  }
  exception () {
    // appender de erros utilizados para produção
    if (process.env.NODE_ENV === 'production') {
      this.express.use(Sentry.Handlers.errorHandler())
    }

    this.express.use(async (err, req, res, next) => {
      /**
       * verifica se o erro capturado é uma instancia de erro, se tem status já o retorna
       */
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err)
      }
      /**
       * Para casos de ambiente de dev o youch irá servir como formatador de erros
       */
      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err)
        return res.json(await youch.toJSON())
      }
      return res
        .status(err.status || 500)
        .json({ error: 'Internal Server Error' })
    })
  }
}
module.exports = new App().express
