const express = require('express')
const validate = require('express-validation')
/**
 * Para que eu possa sempre enviar o erros das promises
 * para o Exception Handler foi adicionado o express-async-handler
 *
 */
const handle = require('express-async-handler')

const routes = express.Router()
const controllers = require('./app/controllers')

const authMiddleware = require('./app/middlewares/auth')
const validators = require('./app/validators/index')

routes.post(
  '/users',
  validate(validators.User),
  handle(controllers.UserController.store)
)
routes.post(
  '/sessions',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)
// toda rota a partir da rota abaixo estará sujeita ao authMiddleware
routes.use(authMiddleware)
/**
 * ads
 */
routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.post(
  '/ads',
  validate(validators.Ad),
  handle(controllers.AdController.store)
)
routes.put(
  '/ads/:id',
  validate(validators.Ad),
  handle(controllers.AdController.update)
)
routes.delete('/ads/:id', handle(controllers.AdController.destroy))
/**
 * Purchases
 */
routes.post(
  '/purchases',
  validate(validators.Purchase),
  handle(controllers.PurchaseController.store)
)

module.exports = routes
