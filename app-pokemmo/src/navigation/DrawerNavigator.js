import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useTheme } from "../theme/themecontext";

import HomeScreen from "../screen/HomeScreen";
import MovesScreen from "../screen/MovesScreen";
import PokedexScreen from "../screen/PokedexScreen";
import ProfileScreen from "../screen/ProfileScreen";
import TeamScreen from "../screen/TeamScreen";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation, state }) => {
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    {
      name: "Inicio",
      screen: "Home",
      color: theme.primary,
      image: require('../../assets/icons/home.png'),
    },
    {
      name: "Pokedex",
      screen: "Pokedex",
      color: theme.secondary,
      image: require('../../assets/icons/pokedex.png'),
    },
    {
      name: "Equipo",
      screen: "Team",
      color: theme.accent,
      image: require('../../assets/icons/home.png'),
    },
    {
      name: "Movimientos",
      screen: "Moves",
      color: theme.warning,
      image: require('../../assets/icons/moves.svg'),
    },
    {
      name: "Perfil",
      screen: "Profile",
      color: theme.success,
      image: require('../../assets/icons/home.png'),
    },
  ];

  return (
    
    <View
      style={[styles.drawerContainer, { backgroundColor: theme.background }]}
    >
     
      <View
        style={[
          styles.drawerHeader,
          { backgroundColor: theme.primary, borderColor: theme.border },
        ]}
      >
        <Text style={[styles.headerTitle, { fontFamily: theme.fonts.primary }]}>
          POKEMMO
        </Text>
        <Text
          style={[styles.headerSubtitle, { fontFamily: theme.fonts.regular }]}
        >
          GBA Edition
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.themeButton,
          { borderColor: theme.border, backgroundColor: theme.surface },
        ]}
        onPress={toggleTheme}
      >
        <Text
          style={[
            styles.themeButtonText,
            { color: theme.text, fontFamily: theme.fonts.regular },
          ]}
        >
          Modo: {theme.mode === "dark" ? "Oscuro" : "Claro"}
        </Text>
      </TouchableOpacity>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => {
          const isActive = state.index === index;
          return (
            <TouchableOpacity
              key={item.name}
              style={[
                styles.menuItem,
                {
                  borderColor: isActive ? item.color : theme.border,
                  backgroundColor: isActive ? item.color + "20" : theme.surface,
                },
              ]}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View style={styles.menuItemContent}>
                {/*aca poner la imagen */}
                <Image source={item.image} style={{ width: 32, height: 32 }} />

                <Text
                  style={[
                    styles.menuText,
                    {
                      color: isActive ? item.color : theme.text,
                      fontFamily: theme.fonts.regular,
                    },
                  ]}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.drawerFooter}>
        <View
          style={[
            styles.pixelBorder,
            { borderColor: theme.primary, backgroundColor: theme.surface },
          ]}
        >
          <Text
            style={[
              styles.footerText,
              { color: theme.primary, fontFamily: theme.fonts.primary },
            ]}
          >
            Integrantes:
          </Text>
          <Text
            style={[
              styles.footerText,
              { color: theme.primary, fontFamily: theme.fonts.primary },
            ]}
          >
            Guillermo Diaz
          </Text>
          <Text
            style={[
              styles.footerText,
              { color: theme.primary, fontFamily: theme.fonts.primary },
            ]}
          >
            Cristopher Ovaillos
          </Text>
        </View>
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
          borderBottomWidth: 2,
          borderBottomColor: theme.primary,
        },
        headerTintColor: theme.primary,
        headerTitleStyle: {
          fontFamily: theme.fonts.primary,
          fontSize: 14,
        },
        drawerStyle: {
          backgroundColor: "transparent",
          width: 280,
        },
        drawerType: "slide",
        overlayColor: "rgba(0,0,0,0.5)",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "INICIO" }}
      />
      <Drawer.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "POKEDEX" }}
      />
      <Drawer.Screen
        name="Team"
        component={TeamScreen}
        options={{ title: "EQUIPO" }}
      />
      <Drawer.Screen
        name="Moves"
        component={MovesScreen}
        options={{ title: "MOVIMIENTOS" }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "PERFIL" }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 50,
  },
  drawerHeader: {
    height: 100,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    color: "#000",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#000",
    marginTop: 5,
  },
  themeButton: {
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 2,
    padding: 10,
    alignItems: "center",
  },
  themeButtonText: {
    fontSize: 14,
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  menuItem: {
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 2,
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    borderRadius: 4,
    marginRight: 15,
  },
  menuText: {
    marginLeft:5,
    fontSize: 16,
  },
  drawerFooter: {
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  pixelBorder: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
  footerText: {
    fontSize: 10,
  },
});

export default DrawerNavigator;
