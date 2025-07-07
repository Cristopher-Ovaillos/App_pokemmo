const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Error al conectar a MySQL:', err.message);
    return;
  }
  console.log('Conectado a MySQL correctamente');

  // Leer archivo JSON
  const rawData = fs.readFileSync('../data/data/moves.json', 'utf8');
  const moves = JSON.parse(rawData);


  const sql = `
     INSERT INTO moves
      (id, name, type, power, accuracy, pp, damage_class)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      name = VALUES(name),
      type = VALUES(type),
      power = VALUES(power),
      accuracy = VALUES(accuracy),
      pp = VALUES(pp),
      damage_class = VALUES(damage_class)
  `;

  // 4) Iterar e insertar
  moves.forEach(move => {
    const { id, name, type, power, accuracy, pp, damage_class } = move;
    db.query(sql,
      [ id, name, type, power, accuracy, pp, damage_class ],
      (err) => {
        if (err) {
          console.error(`❌ Error con ${name} (ID ${id}):`, err.message);
        } else {
          console.log(`✓ Mov ${name} (ID ${id}) insertado/actualizado`);
        }
      }
    );
  });


});
