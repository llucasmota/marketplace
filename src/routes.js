const express = require('express')
const validate = require('express-validation')

const routes = express.Router()
const controllers = require('./app/controllers')

const authMiddleware = require('./app/middlewares/auth')
const validators = require('./app/validators/index')

routes.post(
  '/users',
  validate(validators.User),
  controllers.UserController.store
)
routes.post(
  '/sessions',
  validate(validators.Session),
  controllers.SessionController.store
)
// toda rota a partir da rota abaixo estará sujeita ao authMiddleware
routes.use(authMiddleware)
/**
 * ads
 */
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', validate(validators.Ad), controllers.AdController.store)
routes.put('/ads/:id', validate(validators.Ad), controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)
/**
 * Purchases
 */
routes.post(
  '/purchases',
  validate(validators.Purchase),
  controllers.PurchaseController.store
)

module.exports = routes
