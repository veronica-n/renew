import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Dimensions
  } from 'react-native';
import {Community}  from '../screens/CommunityScreen';
import {LandingScreen}  from '../screens/LandingScreen';
const Tab = createBottomTabNavigator();

function BottomTabs({navigation}) {
  return (
    <Tab.Navigator
        intialRouteName = "Landing"
        screenOptions={{
            headerShown: false,
        }}
        tabBarOptions={{
            showLabel: false,
            activeTintColor:"#F58024",
            inactiveTintColor: "#979696",
            style: {
              backgroundColor: '#FFFFFF',
              borderTopWidth: 0,
              elevation: 0,
              height: 100,
            }
        }}
    >
      <Tab.Screen name="Landing" component={LandingScreen} options = {{
                tabBarLabel: 'Web' }}
              />
      <Tab.Screen name="Community" component={Community} options = {{
                tabBarLabel: 'Web' }}/>
    </Tab.Navigator>
  );
}

export default BottomTabs;