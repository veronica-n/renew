import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ActionButton} from '../components/ActionButton';
import {ActionText} from '../components/ActionText';
import {ScreenContainer} from '../components/ScreenContainer';

interface Props {
    navigation: any,
}

export const LandingScreen = ({navigation}: Props) => {
    return (
        <ScreenContainer>
            <Image style={styles.image} source={require('../assets/renewLogo.png')} />
            <View style={styles.actionSection}>
                <ActionButton 
                    text={'Log in'} 
                    backgroundColour={'#4A6FA5'} 
                    onPress={() => navigation.navigate('LoginScreen')}
                />
                <ActionText text={'Create account'} colour={'#4A6FA5'} onPress={() => {}} />
            </View>
        </ScreenContainer>
    );
};

const styles = StyleSheet.create({
    image: {
        marginTop: '30%',
    },
    actionSection: {
        width: '100%',
        alignItems: 'center',
        marginTop: '40%'
    }
});
