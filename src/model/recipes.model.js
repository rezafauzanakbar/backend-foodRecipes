const db = require('../config/db')
const recipesModel = {
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM recipes', (err, res) => {
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
      db.query(`SELECT * FROM recipes WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // router insert
  store: (id, photo, title, ingredients, video, step, description) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        INSERT INTO recipes (id, photo, title, ingredients, video, step, description)
        VALUES
        (${id}, '${photo}', '${title}', '${ingredients}', '${video}', '${step}', '${description}')`,
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
      db.query(`DELETE FROM recipes WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // router update
  update: (id, photo, title, ingredients, video, step, description) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE recipes SET
          photo = COALESCE($1, photo),
          title = COALESCE($2, title),
          ingredients = COALESCE($3, ingredients),
          video = COALESCE($4, video),
          step = COALESCE($5, step),
          description = COALESCE($6, description)
          WHERE id = $7`,
        [photo, title, ingredients, video, step, description, id],
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
  selectSearch: (title) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM recipes WHERE title='${title}'`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  selectSorting: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT title FROM recipes ORDER BY title ASC', (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }
}
module.exports = recipesModel
