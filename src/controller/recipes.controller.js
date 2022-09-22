const recipesModel = require("../model/recipes.model");
const { success, failed } = require("../helper/response");
const recipesController = {
  // method
  list: async (req, res) => {
    // method untuk menampilkan data
    const getRecipes = await recipesModel.selectAll();
    try {
      res.json(getRecipes);
    } catch (err) {
      res.json(err);
    }
  },
  detail: async (req, res) => {
    // method untuk menampilkan hanya satu id
    const id = req.params.id;
    const getRecipes = await recipesModel.selectDetail(id);
    try {
      res.json(getRecipes.rows);
    } catch (err) {
      res.json(err);
    }
  },
  insert: async (req, res) => {
    // method untuk input
    const { gambar, title, ingredients, video, step, description } = req.body;
    const getRecipes = await recipesModel.store(
      gambar,
      title,
      ingredients,
      video,
      step,
      description
    );
    try {
      res.json(getRecipes);
    } catch (err) {
      res.json(err);
    }
  },
  destroy: async (req, res) => {
    // method untuk menghapus
    const id = req.params.id;
    const getRecipes = await recipesModel.removeById(id);
    try {
      res.json(getRecipes);
    } catch (err) {
      res.json(err);
    }
  },
  update: async (req, res) => {
    const { gambar, title, ingredients, video, step, description } = req.body;
    const id = req.params.id;
    const getRecipes = await recipesModel.update(
      id,
      gambar,
      title,
      ingredients,
      video,
      step,
      description
    );
    try {
      res.json(getRecipes);
    } catch (err) {
      res.json(err);
    }
  },
  search: async (req, res) => {
    const title = req.params.title;
    const getRecipes = await recipesModel.selectSearch(title);
    try {
      res.json(getRecipes.rows);
    } catch (err) {
      res.json(err);
    }
  },
  sorting: async (req, res) => {
    const getRecipes = await recipesModel.selectSorting();
    try {
      res.json(getRecipes);
    } catch (err) {
      res.json(err);
    }
  },
};

module.exports = recipesController;
