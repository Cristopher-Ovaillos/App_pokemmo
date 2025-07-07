// cargarNatures.js
const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error('❌ Error al conectar a MySQL:', err.message);
    return;
  }
  console.log('✅ Conectado a MySQL correctamente');

  const rawData = fs.readFileSync('../data/data/natures.json', 'utf8');
  const natures = JSON.parse(rawData);

  const sql = `
    INSERT INTO natures (name, increased_stat, decreased_stat)
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE
      increased_stat = VALUES(increased_stat),
      decreased_stat = VALUES(decreased_stat)
  `;

  natures.forEach(nature => {
    const values = [
      nature.name,
      nature.increased_stat,
      nature.decreased_stat,
    ];

    db.query(sql, values, (err) => {
      if (err) {
        console.error(`Error insertando naturaleza ${nature.name}:`, err.message);
      } else {
        console.log(`✓ Naturaleza ${nature.name} insertada/actualizada.`);
      }
    });
  });
});
