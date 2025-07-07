const mysql = require('mysql2/promise');
const fs = require('fs');
require('dotenv').config();

async function main() {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const rawData = fs.readFileSync('../data/data/pokemon_moves.json', 'utf8'); // Ajusta ruta si es necesario
  const moves = JSON.parse(rawData);

  const sql = `
    INSERT INTO pokemon_moves (pokemon_id, move_id, method, level_learned)
    VALUES (?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      level_learned = VALUES(level_learned)
  `;

  for (const m of moves) {
    const values = [
      m.pokemon_id,
      m.move_id,
      m.method ?? null,
      m.level_learned ?? null,
    ];

    try {
      await db.execute(sql, values);
      console.log(`Insertado/actualizado move ${m.move_id} para pokemon ${m.pokemon_id} (${m.method})`);
    } catch (err) {
      console.error(`Error insertando move ${m.move_id} para pokemon ${m.pokemon_id}:`, err.message);
    }
  }

  await db.end();
  console.log('Carga completa.');
}

main();
