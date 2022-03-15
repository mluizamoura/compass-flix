import React from 'react';
import {StatusBar} from 'react-native';
import Login from './pages/Login';
import HomeTabScreen from './routes/HomeTabScreen.routes';
import Movies from './pages/Movies';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeTabScreen" component={HomeTabScreen} />
        <Stack.Screen name="Movies" component={Movies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
