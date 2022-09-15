// config env
require('dotenv').config()

// declare library
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const xss = require('xss-clean')
const port = process.env.PORT
const cors = require('cors')

// buat route
const userRouter = require('./src/router/user.router')
const recipesRouter = require('./src/router/recipes.router')
const app = express()
app.use(bodyParser.json())
app.use(helmet())
app.use(userRouter)
app.use(recipesRouter)
app.use(xss())
app.use(cors())

// jalankan express
app.listen(port, () => {
  console.log('SERVECE RUNNING ON PORT 3001')
})
