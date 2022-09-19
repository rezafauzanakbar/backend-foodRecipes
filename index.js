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
const commentRouter = require('./src/router/comment.router')
const app = express()
app.use(bodyParser.json())
app.use(helmet())
app.use(xss())
app.use(cors())
app.use(userRouter)
app.use(recipesRouter)
app.use(commentRouter)

// jalankan express
app.listen(port, () => {
  console.log('SERVECE RUNNING ON PORT 3001')
})
