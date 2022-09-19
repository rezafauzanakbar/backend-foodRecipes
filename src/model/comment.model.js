const db = require('../config/db')
const commentModel = {
  selectAll: (limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM comments LIMIT ${limit} OFFSET ${offset}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }
}
module.exports = commentModel
