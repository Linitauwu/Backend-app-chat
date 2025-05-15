const mysql = require('mysql2/promise');

const pool = mysql.createPool({
<<<<<<< HEAD
  host: process.env.DB_HOST || 'mysql.railway.internal', // Dirección del servidor
  user: process.env.DB_USER || 'root',     // Usuario predeterminado
  password: process.env.DB_PASSWORD || '', // Sin contraseña (si no está configurada)
  database: process.env.DB_NAME || 'tutores', // Nombre de la base de datos
  port: process.env.DB_PORT || 3306,       // Puerto predeterminado
=======
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
>>>>>>> ee0e216f0f3776b70a5e237f906cadfa053de9f8
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;

