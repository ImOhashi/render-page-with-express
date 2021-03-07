import express from 'express'

class Routes {
  constructor () {
    this.router = express.Router()

    this.setRoutes()
  }

  setRoutes () {
    this.router.use('/teste', (req, res) => {
      res.status(200).send('teste')
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
