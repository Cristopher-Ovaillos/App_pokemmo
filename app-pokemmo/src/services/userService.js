import { API_URL } from '../config/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Maneja las respuestas de la API de forma centralizada.
 * @param {Response} response - El objeto de respuesta de fetch.
 * @returns {Promise<any>} - Una promesa que resuelve con los datos JSON o rechaza con un error.
 */
const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    // Crea un objeto de error con el mensaje del servidor para un mejor manejo.
    const error = new Error(data.message || 'Algo salió mal en el servidor.');
    error.response = data;
    error.status = response.status;
    throw error;
  }
  return data;
};

/**
 * Registra un nuevo usuario.
 * @param {string} username - El nombre de usuario.
 * @param {string} password - La contraseña.
 * @returns {Promise<{message: string, userId: number}>} - La respuesta del servidor.
 */
export const register = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error en el servicio de registro:', error.message);
    throw error; // Re-lanzamos el error para que el componente que llama lo pueda manejar.
  }
};

/**
 * Obtiene el perfil del usuario autenticado.
 * @returns {Promise<{id: number, username: string}>} - Los datos del perfil del usuario.
 */
export const getProfile = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    if (!token) {
      throw new Error('No se encontró el token de autenticación.');
    }

    const response = await fetch(`${API_URL}/api/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error en el servicio de perfil:', error.message);
    // Si el token es inválido, el servidor devolverá un 401, que será capturado aquí.
    throw error;
  }
};

export const logout = async () => {
  // Simplemente borramos el token del almacenamiento local.
  await AsyncStorage.removeItem('userToken');
};

/**
 * Inicia sesión de un usuario.
 * @param {string} username - El nombre de usuario.
 * @param {string} password - La contraseña.
 * @returns {Promise<{message: string, token: string}>} - La respuesta del servidor, incluyendo el token JWT.
 */
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error en el servicio de login:', error.message);
    throw error; // Re-lanzamos el error para que el componente que llama lo pueda manejar.
  }
};
