const commentModel = require("../model/comment.model");
const { success, failed } = require("../helper/response");
const commentController = {
  // insert
  insert: (req, res) => {
    const { id_users, id_recipes, message } = req.body;
    const data = {
      id_users,
      id_recipes,
      message,
    };
    commentModel
      .insertComments(data)
      .then((result) => {
        success(res, result.rowCount, "success", "Insert Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to insert");
      });
  },

  //get all
  list: (req, res) => {
    commentModel
      .getAllComments()
      .then((result) => {
        success(res, result.rows, "success", "Get All List Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to get all list");
      });
  },

  //get all hire by user
  listByUser: (req, res) => {
    const id_users = req.params.id;
    commentModel
      .getAllCommentsByUser(id_users)
      .then((result) => {
        success(res, result.rows, "success", "Get All By User Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to get all by user");
      });
  },

  //get all hire by perekrut
  listByRecipes: (req, res) => {
    const id_recipes = req.params.id;
    commentModel
      .getAllCommentsByRecipes(id_recipes)
      .then((result) => {
        success(res, result.rows, "success", "Get All By recipes Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed to Get All By recipes");
      });
  },
  destroy: (req, res) => {
    const id_comments = req.params.id;
    commentModel
      .deleteComments(id_comments)
      .then((result) => {
        success(res, result.rowCount, "success", "Delete Success");
      })
      .catch((err) => {
        failed(res, err.message, "failed", "Failed delete");
      });
  },
};

module.exports = commentController;
