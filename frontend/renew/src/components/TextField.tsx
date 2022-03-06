import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

interface Props {
    placeholder?: string;
    borderColour?: string;
    onChangeText: (text: string) => void;
    isPassword?: boolean;
    children?: any;
}

export const TextField = ({
    placeholder, 
    borderColour, 
    onChangeText, 
    isPassword = false, 
    children
}: Props) => {
    return (
        <View style={{...styles.box, borderColor: borderColour}}>
            <Text style={{...styles.placeholder, color: borderColour}}>{placeholder}</Text>
            <TextInput
                style={{...styles.input, borderColor: borderColour}}
                onChangeText={onChangeText}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={isPassword}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderRadius: 8,
        width: '85%',
        height: 80,
        alignItems: 'flex-start',
        paddingLeft: 8,
        paddingTop: 8,
        marginBottom: 15,
    },
    placeholder: {
        fontFamily: 'VarelaRoundRegular',
        fontSize: 15,
    },
    input: {
        fontFamily: 'VarelaRoundRegular',
        fontSize: 18,
        width: '100%',
    }
});