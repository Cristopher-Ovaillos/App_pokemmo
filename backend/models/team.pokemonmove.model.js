
const db = require('../config/db');

exports.bulkCreate = (teamPokemonId, moves, callback) => {
  if (!moves.length) return callback(null);
  const placeholders = moves.map(() => '(?, ?, ?)').join(', ');
  const params = [];
  moves.forEach((m, i) => params.push(teamPokemonId, m.move_id, m.slot));
  const sql = `INSERT INTO team_pokemon_moves (team_pokemon_id, move_id, slot) VALUES ${placeholders}`;
  db.query(sql, params, err => callback(err));
};

exports.findByTeamPokemon = (teamPokemonId, callback) => {
  const sql = `
    SELECT slot, m.*
    FROM team_pokemon_moves tpm
    JOIN moves m ON tpm.move_id = m.id
    WHERE tpm.team_pokemon_id = ?
    ORDER BY slot`;
  db.query(sql, [teamPokemonId], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
};

exports.update = (teamPokemonId, slot, move_id, callback) => {
  const sql = `
    INSERT INTO team_pokemon_moves (team_pokemon_id, move_id, slot)
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE move_id = VALUES(move_id)`;
  db.query(sql, [teamPokemonId, move_id, slot], err => callback(err));
};

exports.deleteSlot = (teamPokemonId, slot, callback) => {
  const sql = slot
    ? 'DELETE FROM team_pokemon_moves WHERE team_pokemon_id = ? AND slot = ?'
    : 'DELETE FROM team_pokemon_moves WHERE team_pokemon_id = ?';
  const params = slot ? [teamPokemonId, slot] : [teamPokemonId];
  db.query(sql, params, err => callback(err));
};
