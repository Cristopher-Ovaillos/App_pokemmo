const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = function(req, res, next) {
  // Obtener el token del header
  const authHeader = req.header('Authorization');

  // Verificar si no hay token
  if (!authHeader) {
    return res.status(401).json({ message: 'No hay token, autorización denegada' });
  }

  // El token debe tener el formato "Bearer <token>"
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Formato de token no válido' });
  }

  const token = authHeader.substring(7, authHeader.length);

  // Verificar el token
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // Agregar el usuario decodificado (que contiene el id) al objeto de la petición
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'El token no es válido' });
  }
};
