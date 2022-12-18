const recipesModel = require("../model/recipes.model");
const { success, failed } = require("../helper/response");
const cloudinary = require("../helper/cloudinary");

const recipesController = {
  // method
  list: async (req, res) => {
    //method untuk menampilkan data
    const sort = req.query.sort;
    const asc = req.query.asc;
    const limit = Number(req.query.limit) || 3;
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * limit;
    const getRecipes = await recipesModel.selectAll(sort, asc, limit, offset);
    try {
      res.json(getRecipes);
    } catch (err) {
      res.json(err);
    }
  },
  allList: async (req, res) => {
    //method untuk menampilkan data
    const getRecipes = await recipesModel.selectAllData();
    try {
      res.json(getRecipes);
    } catch (err) {
      res.json(err);
    }
  },
  listRecipes: (req, res) => {
    const sort = req.query.sort;
    const asc = req.query.asc;
    const limit = Number(req.query.limit) || 3;
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * limit;
    recipesModel
      .getAllRecipes(sort, asc, limit, offset)
      .then((result) => {
        success(res, result.rows, "success", "Get All List Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to get all list");
      });
  },

  listByUser: (req, res) => {
    const id_users = req.params.id;
    recipesModel
      .getAllRecipesByUser(id_users)
      .then((result) => {
        success(res, result.rows, "success", "Get All By User Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to get all by user");
      });
  },
  detail: (req, res) => {
    const id_recipes = req.params.id;
    recipesModel
      .getDetailRecipes(id_recipes)
      .then((result) => {
        success(res, result.rows, "success", "Get Detail success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to get detail");
      });
  },
  destroy: (req, res) => {
    const id_recipes = req.params.id;
    recipesModel
      .deleteRecipes(id_recipes)
      .then((result) => {
        success(res, result.rowCount, "success", "Delete Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to delete");
      });
  },
  insert: async (req, res) => {
    //jika menggunakan cloudinary
    const picture = await cloudinary.uploader.upload(req.file.path);

    // method untuk input
    const { id_users, title, ingredients, video } = req.body;

    //jika upload image menggunakan local
    // const picture = req.file.filename;
    const getRecipes = await recipesModel.store(
      id_users,
      picture,
      title,
      ingredients,
      video
    );
    try {
      res.json(getRecipes);
    } catch (err) {
      res.json(err);
    }
  },
  update: async (req, res) => {
    const { title, ingredients, video } = req.body;
    const id_recipes = req.params.id;
    const picture = req.file.filename;
    const getRecipes = await recipesModel.update(
      id_recipes,
      picture,
      title,
      ingredients,
      video
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
  detailTitle: (req, res) => {
    const title = req.params.title;
    recipesModel
      .selectDetailTitle(title)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
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
