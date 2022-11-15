const { Pool } = require('pg');
require('dotenv').config();
const db = new Pool({
    connectionString: process.env.DB_URI
  });

  module.exports = db;