// declare library
const express = require('express')
const {
  list,
  detail,
  insert,
  destroy,
  update,
  search,
  sorting
} = require('../controller/recipes.controller')

// buat variabel dengan memanggil library express router
const router = express.Router()

router
  .get('/recipes', list)
  .get('/recipes/:id', detail)
  .post('/recipes', insert)
  .delete('/recipes/:id', destroy)
  .put('/recipes/:id', update)
  .get('/recipes/search/:title', search)
  .get('/title', sorting)

module.exports = router // harus di ekspor agar bisa dipanggil di index
