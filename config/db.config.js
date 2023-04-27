const dotenv = require('dotenv')
dotenv.config()

const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DBConfigLink,
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool;
