const express = require('express');
const router = express.Router();
const PokemonController = require('../controllers/pokemon.controller');

//buscar pokemon por id
router.get('/:id', PokemonController.getById);

//listar todos
router.get('/', PokemonController.getAll);

module.exports = router;
