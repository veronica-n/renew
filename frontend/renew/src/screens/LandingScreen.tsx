import React, { useContext } from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';
import {ActionButton} from '../components/ActionButton';
import {ActionText} from '../components/ActionText';
import { Colours } from '../components/constants';
import {ScreenContainer} from '../components/ScreenContainer';

interface Props {
    navigation: any,
}

export const LandingScreen = ({navigation}: Props) => {
    // @ts-ignore
    const {logout} = useContext(AuthContext);
    
    return (
        <ScreenContainer>
            <Image style={styles.image} source={require('../assets/renewLogo.png')} />
            <View style={styles.actionSection}>
                <ActionButton 
                    text={'Log in'} 
                    backgroundColour={Colours.darkBlue} 
                    onPress={() => navigation.navigate('LoginScreen')}
                />
                <ActionText text={'Create account'} colour={Colours.darkBlue} onPress={() => navigation.navigate('SignUpScreen')} />
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
