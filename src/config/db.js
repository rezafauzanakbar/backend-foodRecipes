// koneksi ke postgreSQL

// declare library
const pg = require('pg')
const db = new pg.Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  port: process.env.DATABASE_PORT
})

db.connect((err) => {
  if (err) {
    console.log('error connecting to database')
  } else {
    console.log('database connected')
  }
})

module.exports = db
