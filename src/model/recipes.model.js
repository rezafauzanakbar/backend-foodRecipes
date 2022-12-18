const db = require("../config/db");
const recipesModel = {
  // selectAll: (sort, asc, limit, offset) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(
  //       `SELECT * FROM recipes ORDER BY ${sort} ${asc} LIMIT ${limit} OFFSET ${offset}`,
  //       (err, res) => {
  //         if (err) {
  //           reject(err);
  //         }
  //         resolve(res);
  //       }
  //     );
  //   });
  // },
  // selectAllData: () => {
  //   return new Promise((resolve, reject) => {
  //     db.query(`SELECT * FROM recipes`, (err, res) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(res);
  //     });
  //   });
  // },
  getAllRecipes: (sort, asc, limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM recipes join users on recipes.id_users = users.id_user ORDER BY ${sort} ${asc} LIMIT ${limit} OFFSET ${offset};`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  //get all portofolio berdasarkan user
  getAllRecipesByUser: (id_users) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM recipes join users on recipes.id_users = users.id_user WHERE recipes.id_users = ${id_users};`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  //get detail portofolio
  getDetailRecipes: (id_recipes) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM recipes join users on recipes.id_users = users.id_user WHERE id_recipes='${id_recipes}';`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  //delete portofolio
  deleteRecipes: (id_recipes) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM recipes WHERE id_recipes='${id_recipes}'`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  // router insert
  store: (body) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        INSERT INTO recipes (id_users, picture, title, ingredients, video, created_at)
        VALUES
        (${body.id_users},'${body.picture}', '${body.title}', '${body.ingredients}', '${body.video}', now())`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  // router update
  update: (id_recipes, picture, title, ingredients, video, update_at) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE recipes SET
          picture = COALESCE($1, picture),
          title = COALESCE($2, title),
          ingredients = COALESCE($3, ingredients),
          video = COALESCE($4, video),
          update_at = COALESCE($5, now())
          WHERE id_recipes = $6`,
        [picture, title, ingredients, video, update_at, id_recipes],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  // router filter
  selectSearch: (title) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM recipes WHERE title ILIKE '%${title}%'`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  // router filter
  selectDetailTitle: (title) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM recipes WHERE title ILIKE '%${title}%'`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  selectSorting: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT title FROM recipes ORDER BY title ASC", (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
};
module.exports = recipesModel;
