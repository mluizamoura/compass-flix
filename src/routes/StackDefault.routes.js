import React from 'react';
import {StatusBar} from 'react-native';
import Home from '../pages/Home';
import Movies from '../pages/Movies';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function StackDefault() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Movies" component={Movies} />
    </Stack.Navigator>
  );
}

export default StackDefault;
