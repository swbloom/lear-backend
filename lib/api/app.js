const express = require('express')
const config = require('config')
const routes = require('../routes')
const morgan = require('morgan')
const app = express()

app.use(
  morgan(config.api.morgan.format, config.api.morgan.options)
)

app.use(routes)

module.exports = app
