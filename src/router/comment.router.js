// declare library
const express = require("express");
const {
  insert,
  list,
  listByRecipes,
  listByUser,
  destroy,
} = require("../controller/comment.controller");

// buat variabel dengan memanggil library express router
const router = express.Router();

router
  .get("/comment", list)
  .get("/comment/recipes/:id", listByRecipes)
  .get("/comment/user/:id", listByUser)
  .post("/comment", insert)
  .delete("/comment/:id", destroy);

module.exports = router; // harus di ekspor agar bisa dipanggil di index
