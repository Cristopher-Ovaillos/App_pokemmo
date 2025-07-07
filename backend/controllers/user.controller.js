const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secretkey123';

exports.register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Faltan datos' });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    UserModel.create(username, hashedPassword, (err, userId) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY')
          return res.status(409).json({ message: 'Usuario ya existe' });
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'Usuario creado', userId });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Faltan datos' });

  UserModel.findByUsername(username, async (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(401).json({ message: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).json({ message: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login exitoso', token });
  });
};
