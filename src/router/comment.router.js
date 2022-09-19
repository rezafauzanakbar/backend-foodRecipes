// declare library
const express = require('express')
const {
  list
} = require('../controller/comment.controller')

// buat variabel dengan memanggil library express router
const router = express.Router()

router
  .get('/comment', list)

module.exports = router // harus di ekspor agar bisa dipanggil di index
