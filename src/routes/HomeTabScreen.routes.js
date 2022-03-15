import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import StackDefault from './StackDefault.routes';
import ButtonHome from '../components/ButtonHome';

const Tab = createBottomTabNavigator();

function HomeTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#304FFE',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#f00',
          height: 90,
        },
      }}>
      <Tab.Screen
        name="StackDefault"
        component={StackDefault}
        options={{
          tabBarIcon: ({color, focused}) => (
            <ButtonHome focused={focused} name="StackDefault" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabScreen;
