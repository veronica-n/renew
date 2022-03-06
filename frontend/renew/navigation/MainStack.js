import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colours} from '../src/components/constants';

import {CommunityStack} from './CommunityStack';
import { ProfileScreen } from '../src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

// placeholder for now
export const MainStack = () => {
    return (
        <Tab.Navigator
            intialRouteName='CommunityStack'
            screenOptions={{
                headerShown: false,
            }}
            tabBarOptions={{
                showLabel: false,
                activeTintColor: Colours.black,
                inactiveTintColor: Colours.darkTurquoise,
                style: {
                backgroundColor: '#FFFFFF',
                borderTopWidth: 0,
                elevation: 0,
                height: 100,
                }
            }}
        >
            <Tab.Screen name='Community'
                component={CommunityStack}
                options = {{
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home-outline" color={color} size={40} />
                    ),
                }}
            />
            <Tab.Screen name='Resources'
                component={ProfileScreen}
                options = {{
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cart-outline" color={color} size={35} />
                    ),
                }}
            />
            <Tab.Screen name='Profile'
                component={ProfileScreen}
                options = {{
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="storefront" color={color} size={35} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};