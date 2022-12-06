// declare library
const express = require("express");
const {
  list,
  detail,
  destroy,
  update,
  search,
  sorting,
  updatePhoto,
} = require("../controller/user.controller");
const { register, login } = require("../controller/auth.controller");

// buat variabel dengan memanggil library express router
const router = express.Router();

const jwtAuth = require("../middleware/jwtAuth");
const { isAdmin, isCustomer } = require("../middleware/authorization");
const upload = require("../middleware/upload");
const deleteFile = require("../middleware/deleteFile");
//0 = Admin
//1 = Customer

router
  .get("/user", list)
  // .get("/user", jwtAuth, isAdmin, list)
  .get("/user/:id", detail)
  .delete("/user/:id", deleteFile, destroy)
  .put("/user/:id", update)
  .put("/user/photo/:id", deleteFile, upload, updatePhoto)
  .get("/user/search/:name", search)
  .get("/name", sorting)
  .post("/register", register)
  .post("/login", login);

module.exports = router;
