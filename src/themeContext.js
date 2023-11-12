import React, { createContext, useContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
  const [color, setColor] = useState('green');

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: color === 'green' ? '#008450' : '#B81D13',
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
