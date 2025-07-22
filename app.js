import express from 'express'
import { routesToDo } from './routes/routesToDo.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use('/ToDo', routesToDo)

app.listen(PORT, () => {
  console.log('Your server is running')
})
