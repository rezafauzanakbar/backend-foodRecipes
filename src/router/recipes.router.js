// declare library
const express = require("express");
const {
  listRecipes,
  listByUser,
  detail,
  destroy,
  insert,
  update,
  search,
  detailTitle,
  sorting,
} = require("../controller/recipes.controller");

// buat variabel dengan memanggil library express router
const router = express.Router();
const uploadFood = require("../middleware/upload_food");
const deleteFood = require("../middleware/deleteFood");

router
  .get("/recipes/listrecipes", listRecipes)
  .get("/recipes/listrecipesuser/:id", listByUser)
  .get("/recipes/:id", detail)
  .post("/recipes", uploadFood, insert)
  .delete("/recipes/:id", destroy)
  .put("/recipes/:id", uploadFood, update)
  .get("/recipes/search/:title", search)
  .get("/recipe/:title", detailTitle)
  .get("/title", sorting);

module.exports = router; // harus di ekspor agar bisa dipanggil di index
