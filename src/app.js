import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'

import router from './routes/index.js'

class App {
  constructor () {
    this.app = express()

    this.config()
  }

  config () {
    dotenv.config()

    this.app.use(morgan('tiny'))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(router)
  }
}

export default new App().app
