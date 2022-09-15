const db = require('../config/db')
const userModel = {
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users', (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // router details
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // router insert
  store: (id, name, email, phone, password) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        INSERT INTO users (id, name, email, phone, password)
        VALUES
        (${id}, '${name}', '${email}', '${phone}', '${password}')`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        }
      )
    })
  },
  // router hapus
  removeById: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM users WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // router update
  update: (id, name, email, phone, password) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET
        name = COALESCE($1, name),
        email = COALESCE($2, email),
        phone = COALESCE($3, phone),
        password = COALESCE($4, password)
        WHERE id = $5`,
        [name, email, phone, password, id],
        (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        }
      )
    })
  },
  // router filter
  selectSearch: (name) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE name='${name}'`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  selectSorting: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT name FROM users ORDER BY name ASC', (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }
}
module.exports = userModel
