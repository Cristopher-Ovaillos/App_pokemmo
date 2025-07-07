const db = require('../config/db');

exports.findById = (id, callback) => {
  const query = 'SELECT * FROM pokemons WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

exports.findAll = (limit, offset, callback) => {
  db.query('SELECT * FROM pokemons LIMIT ? OFFSET ?', [limit, offset], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};
