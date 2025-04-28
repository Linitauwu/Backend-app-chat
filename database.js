const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost', // Dirección del servidor
  user: process.env.DB_USER || 'root',     // Usuario predeterminado
  password: process.env.DB_PASSWORD || '', // Sin contraseña (si no está configurada)
  database: process.env.DB_NAME || 'tutores', // Nombre de la base de datos
  port: process.env.DB_PORT || 3306,       // Puerto predeterminado
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;