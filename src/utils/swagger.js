import swaggerAutogen from 'swagger-autogen'

const autogen = swaggerAutogen()

const outputFile = '../../docs/swagger_output.json'
const endpointsFiles = ['../routes/index.js']

autogen(outputFile, endpointsFiles)
