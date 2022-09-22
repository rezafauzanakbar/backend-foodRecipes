const db = require("../config/db");
const userModel = {
  selectAll: (limit, offset) => {
    return new Promise((resolve, reject) => {
<<<<<<< HEAD
      db.query(`SELECT * FROM users ORDER BY id ASC`, (err, res) => {
=======
      db.query(`SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`, (err, res) => {
>>>>>>> e2d7d3d47402c9f06cdbf3d2cd336a8388d8f31b
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  // router details
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  // router insert
  store: (name, email, phone, password, level) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        INSERT INTO users (name, email, phone, password, level)
        VALUES
        ('${name}', '${email}', '${phone}', '${password}', ${level})`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  // router hapus
  removeById: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM users WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  // router update
  update: (id, name, email, phone, gambar) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET
        name = COALESCE($1, name),
        email = COALESCE($2, email),
        phone = COALESCE($3, phone),
        gambar = COALESCE($4, gambar)
        WHERE id = $5`,
        [name, email, phone, gambar, id],
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
        `INSERT INTO users (name, email, phone, password, level, gambar) VALUES ('${name}', '${email}', '${phone}', '${password}', ${level}, '${gambar}')`,
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
