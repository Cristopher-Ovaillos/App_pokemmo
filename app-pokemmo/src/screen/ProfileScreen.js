import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { useTheme } from '../theme/themecontext';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const { user, signOut } = useContext(AuthContext);

  const handleLogout = async () => {
    await signOut();
    // La navegación ya no es necesaria aquí, el RootNavigator se encargará.
  };

  // Esta pantalla solo es accesible si `user` existe (ver DrawerNavigator)
  // pero añadimos un fallback por si acaso.
  if (!user) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.primary, fontFamily: theme.fonts.primary }]}>
          Perfil
        </Text>
        <Text style={[styles.subtitle, { color: theme.text, fontFamily: theme.fonts.regular }]}>
          Inicia sesión para ver tu perfil.
        </Text>
        <Button title="Iniciar Sesión" onPress={() => navigation.navigate('Login')} color={theme.accent} />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.primary, fontFamily: theme.fonts.primary }]}>
        Mi Perfil
      </Text>
      <View style={[styles.card, { borderColor: theme.primary, backgroundColor: theme.surface }]}>
        <View style={styles.dataRow}>
          <Text style={[styles.label, { color: theme.textSecondary, fontFamily: theme.fonts.regular }]}>
            Usuario:
          </Text>
          <Text style={[styles.value, { color: theme.text, fontFamily: theme.fonts.bold }]}>
            {user.username}
          </Text>
        </View>
        {/* Aquí puedes agregar más datos del perfil en el futuro */}
      </View>
      <Pressable style={[styles.button, { backgroundColor: theme.accent }]} onPress={handleLogout}>
        <Text style={[styles.buttonText, { fontFamily: theme.fonts.primary, color: theme.background }]}>
          Cerrar Sesión
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 8,
    borderWidth: 2,
    marginBottom: 30,
  },
  dataRow: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});
export default ProfileScreen;  