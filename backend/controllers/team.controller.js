const TeamModel = require('../models/team.model');
const TPModel   = require('../models/team.pokemon.model');
const TPMModel  = require('../models/team.pokemonmove.model');
const PMModel   = require('../models/pokemonmove.model');
const Nature    = require('../models/nature.model');

exports.createTeam = (req, res) => {
  const { user_id, name } = req.body;
  if (!user_id || !name) return res.status(400).json({ message: 'Faltan datos' });

  TeamModel.create(user_id, name, (err, teamId) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Equipo creado', teamId });
  });
};

exports.getTeamsByUser = (req, res) => {
  TeamModel.findByUserId(req.params.userId, (err, teams) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(teams);
  });
};

exports.getTeamById = (req, res) => {
  TeamModel.findById(req.params.teamId, (err, team) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!team) return res.status(404).json({ message: 'Equipo no encontrado' });

    TPModel.findByTeam(req.params.teamId, (err, pokemons) => {
      if (err) return res.status(500).json({ error: err.message });
      let pending = pokemons.length;
      if (!pending) return res.json({ ...team, pokemons: [] });

      pokemons.forEach(p => {
        TPMModel.findByTeamPokemon(p.id, (err, moves) => {
          p.moves = moves;
          if (!--pending) res.json({ ...team, pokemons });
        });
      });
    });
  });
};

exports.updateTeam = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Nombre requerido' });

  TeamModel.update(req.params.teamId, name, err => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Equipo actualizado' });
  });
};

exports.deleteTeam = (req, res) => {
  TeamModel.delete(req.params.teamId, err => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Equipo eliminado' });
  });
};

exports.addPokemonToTeam = (req, res) => {
  const { pokemon_id, nickname, nature_id, iv_hp, iv_atk, iv_def, iv_sp_atk, iv_sp_def, iv_speed, ev_hp, ev_atk, ev_def, ev_sp_atk, ev_sp_def, ev_speed, moves } = req.body;
  TPModel.create({ team_id: req.params.teamId, pokemon_id, nickname, nature_id, iv_hp, iv_atk, iv_def, iv_sp_atk, iv_sp_def, iv_speed, ev_hp, ev_atk, ev_def, ev_sp_atk, ev_sp_def, ev_speed }, (err, tpId) => {
    if (err) return res.status(500).json({ error: err.message });
    TPMModel.bulkCreate(tpId, moves, err => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Pokémon añadido', teamPokemonId: tpId });
    });
  });
};

exports.getTeamPokemon = (req, res) => {
  TPModel.findByTeam(req.params.teamId, (err, pokemons) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(pokemons);
  });
};

exports.getTeamPokemonById = (req, res) => {
  TPModel.findById(req.params.teamPokemonId, (err, p) => {
    if (err) return res.status(500).json({ error: err.message });
    TPMModel.findByTeamPokemon(req.params.teamPokemonId, (err, moves) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ ...p, moves });
    });
  });
};

exports.updateTeamPokemon = (req, res) => {
  const updates = { ...req.body };
  TPModel.update(req.params.teamPokemonId, updates, err => {
    if (err) return res.status(500).json({ error: err.message });
    TPMModel.deleteSlot(req.params.teamPokemonId, null, err => {
      if (err) return res.status(500).json({ error: err.message });
      TPMModel.bulkCreate(req.params.teamPokemonId, updates.moves, err => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Pokémon actualizado' });
      });
    });
  });
};

exports.removePokemonFromTeam = (req, res) => {
  TPModel.delete(req.params.teamPokemonId, err => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Pokémon eliminado' });
  });
};

exports.assignMovesToPokemon = (req, res) => {
  TPMModel.deleteSlot(req.params.teamPokemonId, null, err => {
    if (err) return res.status(500).json({ error: err.message });
    TPMModel.bulkCreate(req.params.teamPokemonId, req.body.moves, err => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Movimientos asignados' });
    });
  });
};

exports.getPokemonMoves = (req, res) => {
  TPMModel.findByTeamPokemon(req.params.teamPokemonId, (err, moves) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(moves);
  });
};

exports.updatePokemonMove = (req, res) => {
  const { move_id } = req.body;
  TPMModel.update(req.params.teamPokemonId, req.params.slot, move_id, err => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Movimiento actualizado' });
  });
};

exports.removePokemonMove = (req, res) => {
  TPMModel.deleteSlot(req.params.teamPokemonId, req.params.slot, err => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Movimiento eliminado' });
  });
};

exports.getAvailableMovesForPokemon = (req, res) => {
  PMModel.findByPokemon(req.params.pokemonId, (err, moves) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(moves);
  });
};

exports.getAllNatures = (req, res) => {
  Nature.listAll((err, natures) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(natures);
  });
};

exports.validateTeam = (req, res) => {
  TPModel.findByTeam(req.params.teamId, (err, pokemons) => {
    if (err) return res.status(500).json({ error: err.message });
    const errors = [];
    if (pokemons.length === 0) errors.push('Equipo vacío');
    if (pokemons.length > 6) errors.push('Máximo 6 Pokémon');
    let pending = pokemons.length;
    pokemons.forEach(p => {
      TPMModel.findByTeamPokemon(p.id, (err, moves) => {
        if (err) return res.status(500).json({ error: err.message });
        if (moves.length === 0) errors.push(`Pokémon ${p.id} sin movimientos`);
        if (!--pending) res.json({ valid: errors.length === 0, errors });
      });
    });
  });
};

exports.cloneTeam = (req, res) => {
  TeamModel.findById(req.params.teamId, (err, team) => {
    if (err) return res.status(500).json({ error: err.message });
    TeamModel.create(team.user_id, team.name + ' (Clone)', (err, newId) => {
      if (err) return res.status(500).json({ error: err.message });
      TPModel.findByTeam(req.params.teamId, (err, pokemons) => {
        if (err) return res.status(500).json({ error: err.message });
        let pending = pokemons.length;
        pokemons.forEach(p => {
          TPModel.create({ ...p, team_id: newId }, (err, tpId) => {
            PMModel.findByPokemon(p.id, (err, moves) => {
              TPMModel.bulkCreate(tpId, moves.map(m => ({ move_id: m.id, slot: m.slot })), () => {
                if (!--pending) res.json({ message: 'Clonación completa', teamId: newId });
              });
            });
          });
        });
      });
    });
  });
};

exports.getTeamStats = (req, res) => {
  // 
  res.json({});
};
