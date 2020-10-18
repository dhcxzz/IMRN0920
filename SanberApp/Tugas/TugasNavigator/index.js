import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from './LoginScreen';
import About from './AboutScreen';
import Skill from './SkillScreen';
import Project from './ProjectScreen';
import Add from './AddScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="TabBawah" component={TabBawah} />
        <Stack.Screen name="Home" component={MyDrawwer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MyDrawwer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="About" component={About} />
      <Stack.Screen name="Skill,Project,Add" component={TabBawah} />
    </Drawer.Navigator>
  );
};

const TabBawah = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Skill" component={Skill} />
      <Tab.Screen name="Project" component={Project} />
      <Tab.Screen name="Add" component={Add} />
    </Tab.Navigator>
  );
};

export default index;

const styles = StyleSheet.create({});
