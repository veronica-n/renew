import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colours} from '../src/components/constants';

import {CommunityStack} from './CommunityStack';
import { ProfileScreen } from '../src/screens/ProfileScreen';
import { MapViewScreen } from '../src/screens/Resources';

const Tab = createBottomTabNavigator();

// placeholder for now
export const MainStack = () => {
    return (
        <Tab.Navigator
            intialRouteName='CommunityStack'
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 65,
                    paddingBottom: 5
                }
            }}
            tabBarOptions={{
                activeTintColor: Colours.black,
                inactiveTintColor: Colours.darkTurquoise,
            }}
        >
            <Tab.Screen name='Community'
                component={CommunityStack}
                options = {{
                    tabBarIcon: ({ color }) => (
                    <Ionicons name="people-outline" color={color} size={35} />
                    ),
                }}
            />
            <Tab.Screen name='Resources'
                component={MapViewScreen}
                options = {{
                    tabBarIcon: ({ color }) => (
                    <Ionicons name="heart-outline" color={color} size={35} />
                    ),
                }}
            />
            <Tab.Screen name='Profile'
                component={ProfileScreen}
                options = {{
                    tabBarIcon: ({ color }) => (
                    <Ionicons name="person-circle-outline" color={color} size={35} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};