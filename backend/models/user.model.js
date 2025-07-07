const db = require('../config/db');

exports.create = (username, password, callback) => {
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, result) => {
    if (err) return callback(err);
    callback(null, result.insertId);
  });
};

exports.findByUsername = (username, callback) => {
  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};
