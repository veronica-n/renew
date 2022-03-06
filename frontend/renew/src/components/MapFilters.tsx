import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import {Colours} from './constants';

interface Props {
    text: string;
    onPress: () => void;
    button: string;
}
export const MapFilter = ({text, onPress, button}: Props) => {
    return (
        <TouchableOpacity 
            style={{...styles.orientation, backgroundColor: button === 'filter1' ? Colours.darkBlue : Colours.white}}
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
        width: '39%',
        height: 34,
        backgroundColor: Colours.darkBlue,
        marginBottom: 10,
        marginHorizontal: 5
    },
    text: {
        fontFamily: 'VarelaRoundRegular',
        color: Colours.black,
        fontSize: 15,
    }
});