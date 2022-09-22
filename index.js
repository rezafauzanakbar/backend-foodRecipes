// declare library
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");

// buat route
<<<<<<< HEAD
const userRouter = require("./src/router/user.router");
const recipesRouter = require("./src/router/recipes.router");
const app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(xss());
app.use(cors());
app.use(userRouter);
app.use(recipesRouter);
=======
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
>>>>>>> e2d7d3d47402c9f06cdbf3d2cd336a8388d8f31b

// jalankan express
app.listen(3001, () => {
  console.log("SERVECE RUNNING ON PORT 3001");
});
