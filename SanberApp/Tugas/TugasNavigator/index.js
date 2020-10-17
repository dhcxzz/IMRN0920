import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
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
        <NavigationContainer initialRouteName="LoginSreen">
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={Login} />
                <Stack.Screen name="TabBawah" component={TabBawah}/>
                <Stack.Screen name="MyDrawwer" component={MyDrawwer}/>
            </Stack.Navigator>
      </NavigationContainer> 
    )
}

const MyDrawwer = ()=>{
    return(
    <Drawer.Navigator initialRouteName="LoginScreen">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
    )
}

const TabBawah =() =>{
    return(
        <Tab.Navigator>
        <Tab.Screen name="Skill" component={Skill} />
        <Tab.Screen name="Project" component={Project} />
        <Tab.Screen name="Add" component={Add} />
      </Tab.Navigator>
    )
}


export default index

const styles = StyleSheet.create({})
