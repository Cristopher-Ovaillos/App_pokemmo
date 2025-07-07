import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/theme/themecontext';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'PressStart2P': require('./assets/fonts/PressStart2P-Regular.ttf'),
    'PixelifySans-Regular': require('./assets/fonts/PixelifySans-Regular.ttf'),
    'PixelifySans-Bold': require('./assets/fonts/PixelifySans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      <StatusBar style="light" backgroundColor="#1a1a2e" />
    </ThemeProvider>
  );
}