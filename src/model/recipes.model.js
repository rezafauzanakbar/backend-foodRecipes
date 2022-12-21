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
      console.log("masuk model");
      console.table(body);
      const user_id = parseInt(body.id_users);
      db.query(
        `
        INSERT INTO recipes (id_users, picture, title, ingredients, video, created_at, picture_pub_id, picture_url, picture_secure_url)
        VALUES
        (${user_id},
          ${body.picture},
          '${body.title}',
          '${body.ingredients}',
          '${body.video}',
          now(),
          '${body.picture_pub_id}',
          '${body.picture_url}',
          '${body.picture_secure_url}')`,
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
  update: (body) => {
    console.log("ini data model", body);
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE recipes SET
          picture = COALESCE($1, picture),
          picture_pub_id = COALESCE($2, picture_pub_id),
          picture_url = COALESCE($3, picture_url),
          picture_secure_url = COALESCE($4, picture_secure_url),
          title = COALESCE($5, title),
          ingredients = COALESCE($6, ingredients),
          video = COALESCE($7, video),
          update_at = COALESCE($8, now())
          WHERE id_recipes = $9`,
        [
          body.picture,
          body.picture_pub_id,
          body.picture_url,
          body.picture_secure_url,
          body.title,
          body.ingredients,
          body.video,
          body.update_at,
          body.id_recipes,
        ],
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
