import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';

interface Props {
    text: string;
    backgroundColour: string;
    onPress: () => void;
    children?: any;
}

export const ActionButton = ({text, backgroundColour, onPress, children}: Props) => {
    return (
        <TouchableOpacity 
            style={{...styles.orientation, backgroundColor: backgroundColour}}
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    orientation: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '85%',
        height: 60,
    },
    text: {
        fontFamily: 'VarelaRoundRegular',
        color: '#FFFFFF',
        fontSize: 22,
    }
});