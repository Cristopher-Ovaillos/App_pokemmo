const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/team.controller');

// EQUIPOS 
// Crear un equipo para un usuario
router.post('/', TeamController.createTeam);
// Obtener equipos de un usuario
router.get('/user/:userId', TeamController.getTeamsByUser);
// Obtener detalles de un equipo especifico (con todos sus pokemon)
router.get('/:teamId', TeamController.getTeamById);
// Actualizar nombre de un equipo
router.put('/:teamId', TeamController.updateTeam);
// Eliminar un equipo
router.delete('/:teamId', TeamController.deleteTeam);


//POKeMON EN EQUIPOS 
// Agregar pokemon a un equipo
router.post('/:teamId/pokemon', TeamController.addPokemonToTeam);
// Obtener pokemon de un equipo
router.get('/:teamId/pokemon', TeamController.getTeamPokemon);
// Obtener un pokemon especifico de un equipo
router.get('/:teamId/pokemon/:teamPokemonId', TeamController.getTeamPokemonById);
// Actualizar pokemon de un equipo (IVs, EVs, naturaleza, nickname)
router.put('/:teamId/pokemon/:teamPokemonId', TeamController.updateTeamPokemon);
// Eliminar pokemon de un equipo
router.delete('/:teamId/pokemon/:teamPokemonId', TeamController.removePokemonFromTeam);


//RUTAS DE MOVIMIENTOS DE POKeMON EN EQUIPOS
// Asignar movimientos a un pokemon del equipo
router.post('/:teamId/pokemon/:teamPokemonId/moves', TeamController.assignMovesToPokemon);
// Obtener movimientos de un pokemon del equipo
router.get('/:teamId/pokemon/:teamPokemonId/moves', TeamController.getPokemonMoves);
// Actualizar un movimiento especifico de un pokemon
router.put('/:teamId/pokemon/:teamPokemonId/moves/:slot', TeamController.updatePokemonMove);
// Eliminar un movimiento de un pokemon
router.delete('/:teamId/pokemon/:teamPokemonId/moves/:slot', TeamController.removePokemonMove);


// RUTAS DE UTILIDAD 
// Obtener movimientos disponibles para un pokemon
router.get('/pokemon/:pokemonId/available-moves', TeamController.getAvailableMovesForPokemon);
// Validar equipo (verificar que no exceda 6 pokemon, etc.)
router.get('/:teamId/validate', TeamController.validateTeam);
// Clonar un equipo
router.post('/:teamId/clone', TeamController.cloneTeam);
// Obtener estadisticas calculadas del equipo
router.get('/:teamId/stats', TeamController.getTeamStats);


module.exports = router;