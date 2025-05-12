const mysql = require('mysql2/promise');

// Crear el pool de conexiones
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',         // Dirección del servidor, por defecto 'localhost'
  user: process.env.DB_USER || 'root',             // Usuario por defecto 'root'
  password: process.env.DB_PASSWORD || '',         // Contraseña (si está configurada)
  database: process.env.DB_NAME || 'tutores',      // Nombre de la base de datos
  port: process.env.DB_PORT || 3306,               // Puerto por defecto 3306
  waitForConnections: true,                         // Esperar conexiones disponibles
  connectionLimit: 10,                              // Límite de conexiones
  queueLimit: 0                                     // Límite de cola
});

module.exports = pool;
