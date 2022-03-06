import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {CommunityScreen} from '../src/screens/CommunityScreen';

const Stack = createStackNavigator();

export const CommunityStack = () => {
    return (
        <Stack.Navigator initialRouteName='CommunityScreen'
                         screenOptions={{
                             headerShown: false
                         }}>
          <Stack.Screen name='CommunityScreen' component={CommunityScreen}/>
        </Stack.Navigator>
      );
};