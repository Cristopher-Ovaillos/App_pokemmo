
const db = require('../config/db');

exports.create = (data, callback) => {
  const sql = `
    INSERT INTO team_pokemons
      (team_id, pokemon_id, nickname, nature_id,
       iv_hp, iv_atk, iv_def, iv_sp_atk, iv_sp_def, iv_speed,
       ev_hp, ev_atk, ev_def, ev_sp_atk, ev_sp_def, ev_speed)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    data.team_id, data.pokemon_id, data.nickname, data.nature_id,
    data.iv_hp, data.iv_atk, data.iv_def,
    data.iv_sp_atk, data.iv_sp_def, data.iv_speed,
    data.ev_hp, data.ev_atk, data.ev_def,
    data.ev_sp_atk, data.ev_sp_def, data.ev_speed
  ];
  db.query(sql, params, (err, result) => {
    if (err) return callback(err);
    callback(null, result.insertId);
  });
};

exports.findByTeam = (teamId, callback) => {
  const sql = `
    SELECT tp.*, p.name AS species, n.name AS nature
    FROM team_pokemons tp
    JOIN pokemons p ON tp.pokemon_id = p.id
    LEFT JOIN natures n ON tp.nature_id = n.id
    WHERE tp.team_id = ?`;
  db.query(sql, [teamId], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
};

exports.findById = (tpId, callback) => {
  const sql = `
    SELECT tp.*, p.name AS species, n.name AS nature
    FROM team_pokemons tp
    JOIN pokemons p ON tp.pokemon_id = p.id
    LEFT JOIN natures n ON tp.nature_id = n.id
    WHERE tp.id = ?`;
  db.query(sql, [tpId], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows[0]);
  });
};

exports.update = (tpId, data, callback) => {
  const fields = [];
  const params = [];
  const allowed = [
    'nickname', 'nature_id',
    'iv_hp','iv_atk','iv_def','iv_sp_atk','iv_sp_def','iv_speed',
    'ev_hp','ev_atk','ev_def','ev_sp_atk','ev_sp_def','ev_speed'
  ];
  for (let key of allowed) {
    if (data[key] !== undefined) {
      fields.push(`${key} = ?`);
      params.push(data[key]);
    }
  }
  params.push(tpId);
  const sql = `UPDATE team_pokemons SET ${fields.join(', ')} WHERE id = ?`;
  db.query(sql, params, err => callback(err));
};

exports.delete = (tpId, callback) => {
  const sql = 'DELETE FROM team_pokemons WHERE id = ?';
  db.query(sql, [tpId], err => callback(err));
};
