import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';
import {ActionButton} from '../components/ActionButton';
import {ActionText} from '../components/ActionText';
import { Colours, FontSizes } from '../components/constants';
import {ScreenContainer} from '../components/ScreenContainer';
import { TextField } from '../components/TextField';

interface Props {
    navigation: any,
}

export const LoginScreen = ({navigation}: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //@ts-ignore
    const {login} = useContext(AuthContext);

    return (
        <>
        <Text style={styles.title}>Sign in to Renew</Text>
        <ScreenContainer>
            <TextField 
            placeholder='Email'
            borderColour={Colours.darkBlue}
            onChangeText={setEmail}
            />
            <TextField 
            placeholder='Password'
            isPassword
            borderColour={Colours.darkBlue}
            onChangeText={setPassword}
            />
            <View style={styles.actionSection}>
                <ActionButton 
                    text={'Log in'} 
                    backgroundColour={'#4A6FA5'} 
                    onPress={() => login(email, password)}
                />
                <ActionText text={'Create account'} colour={'#4A6FA5'} onPress={() => {}} />
            </View>
        </ScreenContainer>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'VarelaRoundRegular',
        fontSize: FontSizes.title,
        color: Colours.darkBlue,
        paddingLeft: '7.5%',
        paddingVertical: '7.5%',
    },
    actionSection: {
        width: '100%',
        alignItems: 'center',
        marginTop: '67%'
    },
});