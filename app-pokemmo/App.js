import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from './src/theme/themecontext';
import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';

function AppContent() {
  const [fontsLoaded] = useFonts({
    'PressStart2P': require('./assets/fonts/PressStart2P-Regular.ttf'),
    'PixelifySans-Regular': require('./assets/fonts/PixelifySans-Regular.ttf'),
    'PixelifySans-Bold': require('./assets/fonts/PixelifySans-Bold.ttf'),
  });

  // Usamos el hook useTheme para que StatusBar se actualice con el tema
  const { theme } = useTheme();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <RootNavigator />
      <StatusBar style={theme.mode === 'dark' ? 'light' : 'dark'} />
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}