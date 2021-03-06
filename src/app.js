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
    this.app.use('/app', router)
      .use('/details', (req, res) => {
        res.status(200).json({
          version: process.env.npm_package_version,
          author: process.env.npm_package_author_name,
          email: process.env.npm_package_author_email,
          repositoryUrl: process.env.npm_package_repository_url
        })
      })
  }
}

export default new App().app
