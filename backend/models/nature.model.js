const db = require('../config/db');

exports.listAll = (callback) => {
  const sql = 'SELECT * FROM natures ORDER BY name';
  db.query(sql, (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
};
