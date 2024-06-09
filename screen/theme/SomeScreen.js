
// screen/SomeOtherScreen.js
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { ThemeContext } from './ThemeContext';

const SomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>Some Other Screen</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

export default SomeScreen;

