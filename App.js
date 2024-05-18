import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './screen/login';
import ProductScreen from './screen/product';

import RegisterScreen from './screen/signIn'
import MainScreen from './navigation/mainContainer';

const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} /> 
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} /> 
     <Stack.Screen name="main" component={MainScreen} options={{headerShown: false}}/> 
     <Stack.Screen name='aaa' component={ProductScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;