const { Router } = require('express')

const routes = Router()

routes.get('/', function (req, res) {
  res.status(200).send('OK')
})

module.exports = routes