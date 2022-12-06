const db = require("../config/db");
const userModel = {
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  // router details
  selectDetail: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE id_user=${id_user}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  // router hapus
  removeById: (id_user) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM users WHERE id_user=${id_user}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  // router update
  update: (id_user, name, email, phone, password, level, update_at) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET
        name = COALESCE($1, name),
        email = COALESCE($2, email),
        phone = COALESCE($3, phone),
        password = COALESCE($4, password),
        level = COALESCE($5, level),
        update_at = COALESCE($6, now())
        WHERE id_user = $7`,
        [name, email, phone, password, level, update_at, id_user],
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
  updatePhoto: (id_user, gambar) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET gambar = '${gambar}' WHERE id_user = ${id_user}`
      )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // router filter
  selectSearch: (name) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE name ILIKE '${name}'`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  selectSorting: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT name FROM users ORDER BY name ASC", (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },

  //model register
  register: ({ name, email, phone, password, level, gambar }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO users (name, email, phone, password, level, gambar, created_at) VALUES ('${name}', '${email}', '${phone}', '${password}', ${level}, '${gambar}', now())`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },

  //model login
  checkUsername: (email) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
};
module.exports = userModel;
