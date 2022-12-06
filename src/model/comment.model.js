const db = require("../config/db");
const commentModel = {
  insertComments: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO comments (id_users, id_recipes, message, created_at) VALUES (${data.id_users}, ${data.id_recipes}, '${data.message}', now());`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  //get all
  getAllComments: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM comments join users on comments.id_users = users.id_user join recipes on comments.id_recipes = recipes.id_recipes;`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  //get all hire berdasarkan user
  getAllCommentsByUser: (id_users) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM comments join users on comments.id_users = users.id_user WHERE comments.id_users = ${id_users};`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  //get all hire berdasarkan perekrut
  getAllCommentsByRecipes: (id_recipes) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM comments join recipes on comments.id_recipes = recipes.id_recipes WHERE comments.id_recipes = ${id_recipes};`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  //delete hire by perekrut
  deleteComments: (id_comments) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM comments WHERE id_comments='${id_comments}'`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
};
module.exports = commentModel;
