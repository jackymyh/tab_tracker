const authController = require('./controllers/authenticationController')
const authControllerPolicy = require('./policies/authenticationControllerPolicy')
const songsController = require('./controllers/songsController')
const bookmarksController = require('./controllers/bookmarksController')
const historiesController = require('./controllers/historiesController')

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
    bookmarksController.index)

  app.post('/bookmarks',
    bookmarksController.add)

  app.get('/bookmarks/:bookmarkId',
    bookmarksController.delete)

  app.get('/histories',
    historiesController.index)

  app.post('/histories',
    historiesController.add)
}
