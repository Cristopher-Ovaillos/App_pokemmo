// models/team.model.js
const db = require('../config/db');

exports.create = (user_id, name, callback) => {
  const sql = 'INSERT INTO teams (user_id, name) VALUES (?, ?)';
  db.query(sql, [user_id, name], (err, result) => {
    if (err) return callback(err);
    callback(null, result.insertId);
  });
};

exports.findByUserId = (user_id, callback) => {
  const sql = 'SELECT * FROM teams WHERE user_id = ?';
  db.query(sql, [user_id], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
};

exports.findById = (teamId, callback) => {
  const sql = 'SELECT * FROM teams WHERE id = ?';
  db.query(sql, [teamId], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows[0]);
  });
};

exports.update = (teamId, name, callback) => {
  const sql = 'UPDATE teams SET name = ? WHERE id = ?';
  db.query(sql, [name, teamId], err => callback(err));
};

exports.delete = (teamId, callback) => {
  const sql = 'DELETE FROM teams WHERE id = ?';
  db.query(sql, [teamId], err => callback(err));
};
