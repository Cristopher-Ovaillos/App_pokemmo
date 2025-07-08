import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { useTheme } from '../theme/themecontext';

const HomeScreen = () => {  
  const { theme } = useTheme();

  const pokemonAnimation = require('../../assets/images/b&w_sprite.gif');


  const kantoMap = require('../../assets/images/kanto.jpg');
  const johtoMap = require('../../assets/images/johto.jpg');
  const hoennMap = require('../../assets/images/hoenn.jpg');
  const sinnohMap =  require('../../assets/images/hoenn.jpg');
  const unovaMap =  require('../../assets/images/hoenn.jpg');

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={pokemonAnimation} style={styles.pokemonImage} contentFit="contain" />
      <Text style={[styles.title, { color: theme.primary, fontFamily: theme.fonts.primary }]}>
        Tu Aventura Comienza
      </Text>
      <Text style={[styles.storyText, { color: theme.text, fontFamily: theme.fonts.regular }]}>
        ¡Bienvenido al mundo de POKÉMMO! Un lugar habitado por criaturas fascinantes llamadas Pokémon. Para algunos, son mascotas. Para otros, compañeros de batalla.
      </Text>
      <Text style={[styles.storyText, { color: theme.text, fontFamily: theme.fonts.regular }]}>
        Tu propia leyenda está a punto de comenzar. Un viaje a través de diversas regiones te espera, cada una con sus propios misterios, desafíos y Pokémon por descubrir.
      </Text>

      <Text style={[styles.regionTitle, { color: theme.secondary, fontFamily: theme.fonts.primary }]}>Kanto</Text>
      <Text style={[styles.storyText, { color: theme.text, fontFamily: theme.fonts.regular }]}>
        La región donde todo comenzó. Desde Pueblo Paleta hasta la Liga Pokémon en la Meseta Añil, Kanto es el hogar de los 151 Pokémon originales.
      </Text>
      <Image source={kantoMap} style={[styles.mapImage, { borderColor: theme.border }]} />

      <Text style={[styles.regionTitle, { color: theme.accent, fontFamily: theme.fonts.primary }]}>Johto</Text>
      <Text style={[styles.storyText, { color: theme.text, fontFamily: theme.fonts.regular }]}>
        Vecina de Kanto, Johto está llena de historia y mitología, con Pokémon legendarios como Ho-Oh y Lugia esperando a los entrenadores más valientes.
      </Text>
      <Image source={johtoMap} style={[styles.mapImage, { borderColor: theme.border }]} />

      <Text style={[styles.regionTitle, { color: theme.warning, fontFamily: theme.fonts.primary }]}>Hoenn</Text>
      <Text style={[styles.storyText, { color: theme.text, fontFamily: theme.fonts.regular }]}>
        Una región de climas extremos, donde las fuerzas primordiales de la tierra y el mar, Groudon y Kyogre, descansan.
      </Text>
      <Image source={hoennMap} style={[styles.mapImage, { borderColor: theme.border }]} />

      <Text style={[styles.regionTitle, { color: theme.primary, fontFamily: theme.fonts.primary }]}>Sinnoh</Text>
      <Text style={[styles.storyText, { color: theme.text, fontFamily: theme.fonts.regular }]}>
        Tierra de mitos y leyendas sobre la creación del universo Pokémon. El Monte Corona divide la región y esconde secretos ancestrales.
      </Text>
      <Image source={sinnohMap} style={[styles.mapImage, { borderColor: theme.border }]} />

      <Text style={[styles.regionTitle, { color: theme.secondary, fontFamily: theme.fonts.primary }]}>Teselia</Text>
      <Text style={[styles.storyText, { color: theme.text, fontFamily: theme.fonts.regular }]}>
        Una región lejana y moderna, llena de nuevos Pokémon y desafíos. Aquí, la verdad y los ideales chocan en una batalla legendaria.
      </Text>
      <Image source={unovaMap} style={[styles.mapImage, { borderColor: theme.border }]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },
  pokemonImage: {
    width: 420,
    height: 320,
    marginBottom: 20,
  },
  storyText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  regionTitle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },
  mapImage: {
    width: '100%',
    height: 500,
    resizeMode: 'contain',
    marginBottom:0,
    borderWidth: 0,
  },
});

export default HomeScreen;  