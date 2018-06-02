const app = require('./app')
const port = 3000

module.exports = {
  start () {
    const server = app.listen(port)

    server.on('listening', () => {
      console.log(`API server listening on ${port}`)
    })
  }
}
