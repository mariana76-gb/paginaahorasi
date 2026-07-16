import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contactRoutes.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors({ origin: '*' }))
app.use(express.json())

app.use('/api', contactRoutes)

app.get('/', (req, res) => {
  res.json({ status: 'Frapessaurio server active' })
})

app.listen(port, () => {
  console.log(`Frapessaurio server running on http://localhost:${port}`)
})
