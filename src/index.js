import express from 'express'
import cors from 'cors'
import router from './Router/index.js'
import compression from 'compression'
import ErrorMiddleware from './Middleware/Error.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(cors({ origin: JSON.parse(process.env.ORIGIN).whitelist }))
app.use(router)
app.use(ErrorMiddleware)

app.use((req, res) => {
  res.status(400).send('No route found!')
})

app.listen(process.env.PORT)
