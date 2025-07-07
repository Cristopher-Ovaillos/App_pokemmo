import { API_URL } from '../config/index';

export async function getPokemons(limit = 20, offset = 0) {
  const res = await fetch(`${API_URL}/api/pokemons?limit=${limit}&offset=${offset}`);
  return res.json();
}
