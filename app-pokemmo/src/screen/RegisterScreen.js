import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useTheme } from '../theme/themecontext';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = useTheme();
  const { signUp } = useContext(AuthContext);

  const handleRegister = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Por favor, ingresa usuario y contraseña.');
      return;
    }
    try {
      await signUp(username, password);
      // El usuario ya está logueado y el estado global ha cambiado.
      // Solo necesitamos cerrar el modal.
      navigation.goBack(); 
    } catch (error) {
      Alert.alert('Error de Registro', error.message || 'No se pudo completar el registro.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.primary, fontFamily: theme.fonts.primary }]}>Crear Cuenta</Text>
      <TextInput
        style={[styles.input, { color: theme.text, borderColor: theme.primary }]}
        placeholder="Usuario"
        placeholderTextColor={theme.text}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, { color: theme.text, borderColor: theme.primary }]}
        placeholder="Contraseña"
        placeholderTextColor={theme.text}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Registrarse" onPress={handleRegister} color={theme.accent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default RegisterScreen;