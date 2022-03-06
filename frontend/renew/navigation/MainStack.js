import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {LandingScreen} from '../src/screens/LandingScreen';

const Stack = createStackNavigator();

// placeholder for now
export const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName='LandingScreen'
                         screenOptions={{
                             headerShown: false
                         }}>
          <Stack.Screen name='LandingScreen' component={LandingScreen}/>
        </Stack.Navigator>
      );
};