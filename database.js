require('dotenv').config();

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'containers-us-west-144.railway.app',  // El dominio público (verifica que sea correcto)
  user: 'root',
  password: 'MUPZXvExsjosBGlooTkSyzgNqasQRdMU',
  database: 'railway',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
