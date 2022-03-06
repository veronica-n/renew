import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';

interface Props {
    text: string;
    colour: string;
    onPress: () => void;
}

export const ActionText = ({text, colour, onPress}: Props) => {
    return (
        <TouchableOpacity 
            style={styles.spacing}
            onPress={onPress}
        >
            <Text style={{...styles.text, color: colour}}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    spacing: {
        marginTop: 20,
    },
    text: {
        fontFamily: 'VarelaRoundRegular',
        fontSize: 22,
    }
});