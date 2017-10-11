const authController = require('./controllers/authenticationController')
const authControllerPolicy = require('./policies/authenticationControllerPolicy')
const songsController = require('./controllers/songsController')

module.exports = (app) => {
  app.post('/register',
    authControllerPolicy.register,
    authController.register)

  app.post('/login',
    authController.login)

  app.get('/songs',
    songsController.showAll)

  app.get('/songs/:songId',
    songsController.show)

  app.post('/songs',
    songsController.add)

  app.put('/songs/:songId',
    songsController.edit)
}
