import express from 'express'
import routes from './routes.js'

const app = express()

//indicar para o express ler o body como JSON
app.use(express.json())

//usar o router
app.use(routes)

export default app