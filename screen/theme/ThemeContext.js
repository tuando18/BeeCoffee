import React, { createContext, useState } from 'react';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const ThemeContext = createContext();

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    text: '#000000',
    text2: '#ffffff',
    primary: '#6200ee',
    card: '#f8f8f8',
    border: '#cccccc',
    cart: '#055E38',
    selectedCategory: '#015C36',
    iconAdd: '#055E38',
    buttonText1: '#000'
  },
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#121212',
    text: '#ffffff',
    text2: '#000000',
    primary: '#bb86fc',
    card: '#1e1e1e',
    border: '#444444',
    cart: '#055E38',
    selectedCategory: '#015C36',
    iconAdd: '#055E38',
    buttonText1: '#fff'
  },
};

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
