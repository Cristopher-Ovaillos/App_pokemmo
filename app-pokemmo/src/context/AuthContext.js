import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as userService from '../services/userService';

export const AuthContext = createContext();

const authReducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_STATE':
      return {
        ...prevState,
        userToken: action.token,
        user: action.user,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        userToken: action.token,
        user: action.user,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        userToken: null,
        user: null,
      };
    default:
      return prevState;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isLoading: true,
    userToken: null,
    user: null,
  });

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          // Si tenemos un token, también obtenemos el perfil del usuario
          const userData = await userService.getProfile();
          dispatch({ type: 'RESTORE_STATE', token: userToken, user: userData });
        } else {
          dispatch({ type: 'RESTORE_STATE', token: null, user: null });
        }
      } catch (e) {
        // Si getProfile falla (ej. token expirado), limpiamos el token.
        await AsyncStorage.removeItem('userToken');
        dispatch({ type: 'RESTORE_STATE', token: null, user: null });
      }
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (username, password) => {
        const data = await userService.login(username, password);
        await AsyncStorage.setItem('userToken', data.token);
        // Después de iniciar sesión, obtenemos el perfil
        const userData = await userService.getProfile();
        dispatch({ type: 'SIGN_IN', token: data.token, user: userData });
      },
      signOut: async () => {
        await userService.logout();
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async (username, password) => {
        // 1. Registra al nuevo usuario.
        await userService.register(username, password);
        // 2. Inicia sesión automáticamente para una mejor experiencia de usuario.
        const data = await userService.login(username, password);
        await AsyncStorage.setItem('userToken', data.token);
        const userData = await userService.getProfile();
        dispatch({ type: 'SIGN_IN', token: data.token, user: userData });
      },
    }),
    [] // Las funciones no cambian, por lo que las dependencias pueden estar vacías.
  );

  return (
    <AuthContext.Provider value={{ ...state, ...authContext }}>
      {children}
    </AuthContext.Provider>
  );
};
