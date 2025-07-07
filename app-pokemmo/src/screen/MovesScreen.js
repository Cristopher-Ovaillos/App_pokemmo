import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/themecontext';


const MovesScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.primary, fontFamily: theme.fonts.primary }]}>
        M
      </Text>
      <Text style={[styles.subtitle, { color: theme.text, fontFamily: theme.fonts.regular }]}>
        los moves
      </Text>
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
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});
export default MovesScreen;  