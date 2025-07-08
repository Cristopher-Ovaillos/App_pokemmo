import { View, Text } from "react-native";
import { useTheme } from "../theme/themecontext";

export default function DrawerFooter() {
  const { theme } = useTheme();
  return (
    <View style={{
      borderWidth: 4,
      borderColor: theme.primary,
      backgroundColor: theme.card,
      borderRadius: 0,
      margin: 10,
      padding: 10,
      shadowColor: theme.shadow,
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 0,
      alignItems: "center"
    }}>
      <Text style={{
        fontFamily: theme.fonts.primary,
        color: theme.primary,
        fontSize: 18,
        letterSpacing: 2,
        textShadowColor: theme.shadow,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 0,
      }}>
        POKEMMO
      </Text>
      <Text style={{
        fontFamily: theme.fonts.regular,
        color: theme.textSecondary,
        fontSize: 12,
        marginTop: 4,
      }}>
        GBA Edition
      </Text>
    </View>
  );
}