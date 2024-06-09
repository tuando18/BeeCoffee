// App.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import './i18n/i18n.js';
import LoginScreen from './screen/login';
import RegisterScreen from './screen/signIn';
import MainScreen from './navigation/mainContainer';
import { ThemeProvider, ThemeContext } from './screen/theme/ThemeContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <StatusBar style={theme.dark ? "light" : "dark"} translucent backgroundColor="transparent" />
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="main"
            component={MainScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: theme.colors.text,
            }}
          />
          {/* Add other screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <AppNavigator />
  </ThemeProvider>
);

export default App;
