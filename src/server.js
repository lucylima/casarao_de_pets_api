import express from 'express'
import { petRouter } from './routes/pet.routes.js'
import { ownerRouter } from './routes/owner.routes.js'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(petRouter)
app.use(ownerRouter)

app.listen(port, () => {
  console.log(`rodando na porta ${port}`)
})