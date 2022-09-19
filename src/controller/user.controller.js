const userModel = require('../model/user.model')
const userController = {
  // method
  list: async (req, res) => {
    // method untuk input data
    const limit = Number(req.query.limit) || 4
    const page = Number(req.query.page) || 1
    const offset = (page - 1) * limit
    const getUser = await userModel.selectAll(limit, offset)
    try {
      res.json(getUser)
    } catch (err) {
      res.json(err)
    }
  },
  detail: async (req, res) => {
    // method untuk menampilkan hanya satu id
    const id = req.params.id
    const getUser = await userModel.selectDetail(id)
    try {
      res.json(getUser.rows)
    } catch (err) {
      res.json(err)
    }
  },
  insert: async (req, res) => {
    // method untuk input
    const { id, name, email, phone, password } = req.body
    const getUser = await userModel.store(id, name, email, phone, password)
    try {
      res.json(getUser)
    } catch (err) {
      res.json(err)
    }
  },
  destroy: async (req, res) => {
    // method untuk menghapus
    const id = req.params.id
    const getUser = await userModel.removeById(id)
    try {
      res.json(getUser)
    } catch (err) {
      res.json(err)
    }
  },
  update: async (req, res) => {
    const { name, email, phone, password } = req.body
    const id = req.params.id
    const getUser = await userModel.update(id, name, email, phone, password)
    try {
      res.json(getUser)
    } catch (err) {
      res.json(err)
    }
  },
  search: async (req, res) => {
    const name = req.params.name
    const getUser = await userModel.selectSearch(name)
    try {
      res.json(getUser.rows)
    } catch (err) {
      res.json(err)
    }
  },
  sorting: async (req, res) => {
    const getUser = await userModel.selectSorting()
    try {
      res.json(getUser)
    } catch (err) {
      res.json(err)
    }
  }
}

module.exports = userController
