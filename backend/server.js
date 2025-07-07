require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(express.json())
app.use('/public/images/pokedex', express.static(path.join(__dirname, 'public', 'images', 'pokemons')))

const db = require('./config/db');

const userRoutes = require('./routes/user.routes');
const teamRoutes = require('./routes/team.routes');
const pokemonRoutes = require('./routes/pokemon.routes');

app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/pokemons', pokemonRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor preparado`);
});