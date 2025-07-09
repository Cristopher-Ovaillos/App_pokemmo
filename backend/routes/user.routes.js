const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

// Ruta protegida para obtener el perfil del usuario actual
router.get('/me', authMiddleware, UserController.getProfile);

module.exports = router;
