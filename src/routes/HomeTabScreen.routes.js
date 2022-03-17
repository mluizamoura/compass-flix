import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackDefault from './StackDefault.routes';
import ButtonHome from '../components/ButtonHome';
import ButtonPlay from '../components/ButtonPlay';
import ButtonUser from '../components/ButtonUser';

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
          backgroundColor: '#454545',
          borderTopColor: 'transparent',
          height: 54,
        },
      }}>
      <Tab.Screen
        name="Play"
        component={StackDefault}
        options={{
          tabBarIcon: () => <ButtonPlay name="Play" />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={StackDefault}
        options={{
          tabBarIcon: () => <ButtonHome name="StackDefault" />,
        }}
      />
      <Tab.Screen
        name="User"
        component={StackDefault}
        options={{
          tabBarIcon: () => <ButtonUser name="User" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabScreen;
