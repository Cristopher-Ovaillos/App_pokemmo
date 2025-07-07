import { createContext, useContext, useState } from 'react';
import light from './light';
import dark from './dark';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme((prev) => (prev.mode === 'light' ? dark : light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
