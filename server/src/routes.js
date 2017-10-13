const authController = require('./controllers/authenticationController')
const authControllerPolicy = require('./policies/authenticationControllerPolicy')
const songsController = require('./controllers/songsController')
const bookmarksController = require('./controllers/bookmarksController')
const historiesController = require('./controllers/historiesController')
const isAuthenticated = require('./policies/isAuthenticated')

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

  app.get('/bookmarks',
    isAuthenticated,
    bookmarksController.index)

  app.post('/bookmarks',
    isAuthenticated,
    bookmarksController.add)

  app.get('/bookmarks/:bookmarkId',
    isAuthenticated,
    bookmarksController.delete)

  app.get('/histories',
    isAuthenticated,
    historiesController.index)

  app.post('/histories',
    isAuthenticated,
    historiesController.add)
}
