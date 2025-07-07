
const db = require('../config/db');

exports.findByPokemon = (pokemonId, callback) => {
  const sql = `
    SELECT pm.method, pm.level_learned, m.*
    FROM pokemon_moves pm
    JOIN moves m ON pm.move_id = m.id
    WHERE pm.pokemon_id = ?
    ORDER BY pm.method, pm.level_learned, m.name`;
  db.query(sql, [pokemonId], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
};
