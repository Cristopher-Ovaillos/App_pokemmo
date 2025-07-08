import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useTheme } from "../theme/themecontext";

import HomeScreen from "../screen/HomeScreen";
import MovesScreen from "../screen/MovesScreen";
import PokedexScreen from "../screen/PokedexScreen";
import ProfileScreen from "../screen/ProfileScreen";
import TeamScreen from "../screen/TeamScreen";

import HomeIcon from "../../assets/svg/home";
import PokedexIcon from "../../assets/svg/pokedex";
import MovesIcon from "../../assets/svg/moves";
import TeamIcon from "../../assets/svg/team";
import ProfileIcon from "../../assets/svg/profile"
import BackgroundPattern from "../../assets/svg/Background";
import HeaderBackground from "../../assets/svg/headerbackground";
const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation, state }) => {
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    {
      name: "Inicio",
      screen: "Home",
      color: theme.primary,
      icon: HomeIcon,
    },
    {
      name: "Pokedex",
      screen: "Pokedex",
      color: theme.secondary,
      icon: PokedexIcon,
    },
    {
      name: "Equipo",
      screen: "Team",
      color: theme.accent,
      icon: TeamIcon,
    },
    {
      name: "Movimientos",
      screen: "Moves",
      color: theme.warning,
      icon: MovesIcon,
    },
    {
      name: "Perfil",
      screen: "Profile",
      color: theme.success,
      icon: ProfileIcon,
    },
  ];

  return (
    <View
      style={[styles.drawerContainer, { backgroundColor: theme.background }]}
    >
      <BackgroundPattern />
      <View
        style={[
          styles.drawerHeader,
          { backgroundColor: theme.primary, borderColor: theme.text },
        ]}
      >
        {/* con AbsoluteFillObjet para que no sea centrado*/}
        <View style={StyleSheet.absoluteFillObject}>
          <HeaderBackground />
        </View>
        <Text style={[styles.headerTitle, { color: theme.surface, fontFamily: theme.fonts.primary, zIndex: 1 }]}>
          POKEMMO
        </Text>
        <Text
          style={[styles.headerSubtitle, { color: theme.surface, fontFamily: theme.fonts.bold, zIndex: 1 }]}
        >
          GBA Edition
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.themeButton,
          { borderColor: theme.text, backgroundColor: theme.surface },
        ]}
        onPress={toggleTheme}
      >
        <Text
          style={[
            styles.themeButtonText,
            { color: theme.text, fontFamily: theme.fonts.bold },
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
                  backgroundColor: isActive ? item.color + "33" : theme.surface,
                },
              ]}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View style={styles.menuItemContent}>
                <item.icon 
                  color={isActive ? item.color : theme.text} 
                  size={28} 
                />

                <Text
                  style={[
                    styles.menuText,
                    {
                      color: isActive ? item.color : theme.text,
                      fontFamily: theme.fonts.bold,
                      marginLeft: 15,
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
            styles.footerBox,
            { borderColor: theme.text, backgroundColor: theme.surface },
          ]}
        >
          <Text
            style={[
              styles.footerTitle,
              { color: theme.text, fontFamily: theme.fonts.primary },
            ]}
          >
            Integrantes:
          </Text>
          <Text
            style={[
              styles.footerName,
              { color: theme.text, fontFamily: theme.fonts.regular },
            ]}
          >
            Guillermo Diaz
          </Text>
          <Text
            style={[
              styles.footerName,
              { color: theme.text, fontFamily: theme.fonts.regular },
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
          fontSize: 16,
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
    paddingTop: 40,
  },
  drawerHeader: {
    paddingVertical: 12,
    marginBottom: 20,
    marginHorizontal: 10,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  headerTitle: {
    fontSize: 22,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    marginTop: 5,
  },
  themeButton: {
    marginHorizontal: 10,
    marginBottom: 20,
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  themeButtonText: {
    fontSize: 14,
    textTransform: 'uppercase',
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  menuItem: {
    marginVertical: 4,
    borderWidth: 2,
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  menuText: {
    fontSize: 18,
  },
  drawerFooter: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  footerBox: {
    borderWidth: 2,
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  footerTitle: {
    fontSize: 12,
    marginBottom: 8,
  },
  footerName: {
    fontSize: 10,
    lineHeight: 14,
  },
});

export default DrawerNavigator;