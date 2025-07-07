const PokemonModel = require('../models/pokemon.model');

exports.getById = (req, res) => {
  const { id } = req.params;
  PokemonModel.findById(id, (err, pokemon) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!pokemon) return res.status(404).json({ message: 'Pokémon no encontrado' });
    res.json(pokemon);
  });
};

exports.getAll = (req, res) => {
  const limit = parseInt(req.query.limit) || 20;
  const offset = parseInt(req.query.offset) || 0;

  PokemonModel.findAll(limit, offset, (err, pokemons) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(pokemons);
  });
};


