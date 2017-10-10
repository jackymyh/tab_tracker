const authController = require('./controllers/authenticationController')
const authControllerPolicy = require('./policies/authenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    authControllerPolicy.register,
    authController.register)

  app.post('/login',
    authController.login)
}
