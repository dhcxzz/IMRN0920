{
  /* Kodingan di test menggunakan Android Redmi Note 5 Pro (wyhred) */
}

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import Register from './Register';
import Home from './HomeScreen';
import Splash from './Splash';
import Cart from './cart';
import Message from './message';
import Profile from './profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={TabBawah} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabBawah = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default index;

const styles = StyleSheet.create({});
