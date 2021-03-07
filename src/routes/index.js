import express from 'express'

import path from 'path'

class Routes {
  constructor () {
    this.router = express.Router()

    this.setRoutes()
  }

  setRoutes () {
    this.router.get('/', (req, res) => {
      res.sendFile(path.resolve('./view/index.html'))
    })
      .get('/details', (req, res) => {
        res.status(200).json({
          version: process.env.npm_package_version,
          author: process.env.npm_package_author_name,
          email: process.env.npm_package_author_email,
          repositoryUrl: process.env.npm_package_repository_url
        })
      })
  }
}

export default new Routes().router
