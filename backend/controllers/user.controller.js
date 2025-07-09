const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

const JWT_SECRET = process.env.JWT_SECRET || 'secretkey123';

exports.register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Espera a que el hash se complete
    const userId = await UserModel.create(username, hashedPassword);
    res.status(201).json({ message: 'Usuario creado', userId });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'El nombre de usuario ya existe' });
    }
    console.error('Error en registro:', error); // Manejo de errores centralizado
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  try {
    const user = await UserModel.findByUsername(username); // Espera a que se encuentre el usuario
    // Por seguridad, no especifiques si el usuario no existe o la contraseña es incorrecta.
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const validPassword = await bcrypt.compare(password, user.password); // Espera a que se compare la contraseña
    if (!validPassword) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login exitoso', token });
  } catch (error) {
    console.error('Error en login:', error); // Manejo de errores centralizado
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.getProfile = async (req, res) => {
  // req.user es añadido por el middleware de autenticación
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error al obtener perfil:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
