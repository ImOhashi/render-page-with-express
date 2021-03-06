import express from 'express'
import swaggerUi from 'swagger-ui-express'

class Routes {
  constructor () {
    this.router = express.Router()

    this.setRoutes()
  }

  setRoutes () {
    this.router.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup('../../docs/swagger_output.json'))
  }
}

export default new Routes().router
