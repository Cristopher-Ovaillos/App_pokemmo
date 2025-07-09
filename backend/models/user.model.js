const db = require('../config/db');

exports.create = (username, password) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
      if (err) return reject(err); // Si hay error, la promesa se "rechaza"
      resolve(result.insertId); // Si todo va bien, la promesa se "resuelve" con el valor
    });
  });
};

exports.findByUsername = (username) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};

exports.findById = (id) => {
  return new Promise((resolve, reject) => {
    // Seleccionamos solo los campos que necesitamos para el perfil, excluyendo la contraseña.
    const query = 'SELECT id, username FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};
