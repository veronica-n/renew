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
    multiline?: boolean;
    width?: string;
    height?: number;
    children?: any;
}

export const TextField = ({
    placeholder, 
    borderColour, 
    onChangeText, 
    height = 80,
    width = '85%',
    isPassword = false, 
    multiline = false,
    children
}: Props) => {
    return (
        <View style={{...styles.box, borderColor: borderColour, width, height}}>
            <Text style={{...styles.placeholder, color: borderColour}}>{placeholder}</Text>
            <TextInput
                style={{...styles.input, borderColor: borderColour}}
                onChangeText={onChangeText}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={isPassword}
                multiline={multiline}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderRadius: 8,
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