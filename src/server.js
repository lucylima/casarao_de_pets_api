import express from 'express'
import { petRouter } from './routes/pet.routes.js'

const app = express()
const port = 1721

app.use(express.json())
app.use(petRouter)

app.listen(port, () => {
  console.log(`rodando na porta ${port}`)
})