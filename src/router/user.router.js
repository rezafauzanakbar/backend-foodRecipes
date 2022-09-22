// declare library
const express = require("express");
const {
  list,
  detail,
  insert,
  destroy,
  update,
  search,
  sorting,
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
  .get("/user", jwtAuth, isAdmin, list)
  .get("/user/:id", detail)
  .post("/user", insert)
  .delete("/user/:id", deleteFile, destroy)
  .put("/user/:id", deleteFile, upload, update)
  .get("/user/search/:name", search)
  .get("/name", sorting)
  //register
  .post("/register", upload, register)
  //login
  .post("/login", login);

module.exports = router; // harus di ekspor agar bisa dipanggil di index
