const express = require('express')
const next = require('next')
const routes = require('./routes')
const cors = require('cors')
const gitApi = require('@tinacms/api-git')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  const server = express()
  server.use(handler)
  server.use(cors())
  server.use('/___tina', gitApi.router({
    pathToRepo: process.cwd(),
    pathToContent: "",
  }))
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})