import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
} from 'react-native';
import { ActionButton } from '../components/ActionButton';
import { ScreenContainer } from '../components/ScreenContainer';

export const LandingScreen = () => {
    return (
        <ScreenContainer>
            <Image source={require('../assets/renewLogo.png')} />
            <ActionButton text={'Log in'} backgroundColour={'#4A6FA5'} />
        </ScreenContainer>
    );
};
