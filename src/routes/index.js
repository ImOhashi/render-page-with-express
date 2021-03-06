import express from 'express'

class Routes {
  constructor () {
    this.router = express.Router()

    this.setRoutes()
  }

  setRoutes () {
    this.router.use('/', (req, res) => {
      res.status(200).send('teste')
    })
  }
}

export default new Routes().router
