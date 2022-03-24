const http    = require('http')
const cors    = require('cors')
const config  = require('config')
const express = require('express')
const routes  = require('./routes')

class App {
    constructor() {
        this.app    = express()
        this.server = http.createServer(this.app)

        this.middlewares()
        this.routes()
    }

    routes() {
        this.app.use('/', routes)
    }

    middlewares() {
        this.app.use(express.json({ type: 'application/json' }))
        this.app.use(cors(config.cors))
    }
}

module.exports = new App().server