const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,       // Dirección del servidor de la base de datos
  user: process.env.DB_USER,       // Usuario de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña del usuario
  database: process.env.DB_NAME,   // Nombre de la base de datos
  port: process.env.DB_PORT || 3306, // Puerto de la base de datos (por defecto 3306)
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;