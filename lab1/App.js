import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/Header';
import Box from './src/Box';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './src/Navbar';
import Items from './src/screens/Items';
import Gallery from './src/screens/Gallery';
import Profile from './src/screens/Profile';
import Footer from './src/Footer';
import {enableScreens} from 'react-native-screens';
enableScreens();


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Header />
      <Navbar />
      <Stack.Navigator initialRouteName="Головна">
        <Stack.Screen name='Головна' component={Items} options={{headerShown: false}} />
        <Stack.Screen name='Галерея' component={Gallery} options={{headerShown: false}} />
        <Stack.Screen name='Профіль' component={Profile} options={{headerShown: false}} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

