const userModel = require("../model/user.model");
const { success, failed } = require("../helper/response");
const userController = {
  // method
  list: async (req, res) => {
    // method untuk input data
    const getUser = await userModel.selectAll();
    try {
      res.json(getUser);
    } catch (err) {
      res.json(err);
    }
  },
  detail: async (req, res) => {
    // method untuk menampilkan hanya satu id
    const id = req.params.id;
    const getUser = await userModel.selectDetail(id);
    try {
      res.json(getUser.rows);
    } catch (err) {
      res.json(err);
    }
  },
  insert: async (req, res) => {
    // method untuk input
    const { name, email, phone, password, level } = req.body;
    const getUser = await userModel.store(name, email, phone, password, level);
    try {
      res.json(getUser);
    } catch (err) {
      res.json(err);
    }
  },
  destroy: async (req, res) => {
    // method untuk menghapus
    const id = req.params.id;
    const getUser = await userModel.removeById(id);
    try {
      res.json(getUser);
    } catch (err) {
      res.json(err);
    }
  },
  update: async (req, res) => {
    const { name, email, phone } = req.body;
    const id = req.params.id;
    const gambar = req.file.filename;
    const getUser = await userModel.update(id, name, email, phone, gambar);
    try {
      res.json(getUser);
    } catch (err) {
      res.json(err);
    }
  },
  search: async (req, res) => {
    const name = req.params.name;
    const getUser = await userModel.selectSearch(name);
    try {
      res.json(getUser.rows);
    } catch (err) {
      res.json(err);
    }
  },
  sorting: async (req, res) => {
    const getUser = await userModel.selectSorting();
    try {
      res.json(getUser);
    } catch (err) {
      res.json(err);
    }
  },
};

module.exports = userController;
