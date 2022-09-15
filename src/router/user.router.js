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
} = require('../controller/user.controller')

// buat variabel dengan memanggil library express router
const router = express.Router()

router
  .get('/user', list)
  .get('/user/:id', detail)
  .post('/user', insert)
  .delete('/user/:id', destroy)
  .put('/user/:id', update)
  .get('/user/search/:name', search)
  .get('/name', sorting)

module.exports = router // harus di ekspor agar bisa dipanggil di index
