import React, { ReactNode } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface Props {
    text: string;
    backgroundColour: string;
    children?: any;
}

export const ActionButton = ({text, backgroundColour, children}: Props) => {
    return (
        <TouchableOpacity style={{...styles.orientation, backgroundColour: backgroundColour}}>
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    orientation: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    text: {
        fontFamily: 'VaerlaRoundRegular',
        fontSize: 23,
    }
});