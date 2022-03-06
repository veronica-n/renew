// import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {LandingScreen} from '../src/screens/LandingScreen';

const Stack = createStackNavigator();

export const LoginStack = () => {
    return (
        <Stack.Navigator initialRouteName='LandingScreen'
                         screenOptions={{
                             headerShown: false
                         }}>
          <Stack.Screen name='LandingScreen' component={LandingScreen}/>
        </Stack.Navigator>
      );
};