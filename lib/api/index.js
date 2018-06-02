const config = require('config')
const app = require('./app')

module.exports = {
  start () {
    const server = app.listen(config.api.port)

    server.on('listening', () => {
      console.log(`API server listening on ${config.api.port}`)
    })
  }
}
