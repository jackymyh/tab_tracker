const {
  History,
  User,
  Song
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {userId} = req.query
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      }).map(histories => histories.toJSON())
        .map(histories => _.extend(
          {},
          histories.Song,
          histories))
      res.send(histories)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured'
      })
    }
  },
  async add (req, res) {
    try {
      const {songId, userId} = req.body
      const history = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.send(history)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured'
      })
    }
  }
}
