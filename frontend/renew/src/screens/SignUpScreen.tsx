import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { AuthContext } from '../../navigation/AuthProvider';
import {ActionButton} from '../components/ActionButton';
import {ActionText} from '../components/ActionText';
import { Colours, FontSizes } from '../components/constants';
import {ScreenContainer} from '../components/ScreenContainer';
import { TextField } from '../components/TextField';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
interface Props {
    navigation: any,
}

export const SignUpScreen = ({navigation}: Props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    //@ts-ignore
    const {register} = useContext(AuthContext);

    return (
        <>
        <Text style={styles.title}>Create Account</Text>
        <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >
        <ScreenContainer>
            <TextField 
                placeholder='Name (Required)'
                borderColour={Colours.darkBlue}
                onChangeText={setName}
            />
            <TextField 
                placeholder='Email (Required)'
                borderColour={Colours.darkBlue}
                onChangeText={setEmail}
            />
            <TextField 
                placeholder='Country of Origin (Required)'
                borderColour={Colours.darkBlue}
                onChangeText={setOrigin}
            />
            <TextField 
                placeholder='Country of Residence (Required)'
                borderColour={Colours.darkBlue}
                onChangeText={setDestination}
            />
            <TextField 
                placeholder='Password (Required)'
                isPassword
                borderColour={Colours.darkBlue}
                onChangeText={setPassword}
            />
            <View style={styles.actionSection}>
                <ActionButton 
                    text={'Sign up'} 
                    backgroundColour={Colours.darkBlue} 
                    onPress={() => register(name, email, password, origin, destination)}
                />
                <ActionText text={'Cancel'} colour={Colours.darkBlue} onPress={() => navigation.goBack()} />
            </View>
        </ScreenContainer>
        </KeyboardAwareScrollView>
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
        marginTop: '8%'
    },
});