import React from 'react';
import {Image, Text} from 'react-native';
import {ActionButton} from '../components/ActionButton';
import {ActionText} from '../components/ActionText';
import {ScreenContainer} from '../components/ScreenContainer';

export const LoginScreen = () => {
    return (
        <>
        <Text>Sign in to Renew</Text>
        <ScreenContainer>
            <Image source={require('../assets/renewLogo.png')} />
            <ActionButton 
                text={'Log in'} 
                backgroundColour={'#4A6FA5'} 
                onPress={() => {}}
            />
            <ActionText text={'Create account'} colour={'#4A6FA5'} onPress={() => {}} />
        </ScreenContainer>
        </>
    );
};