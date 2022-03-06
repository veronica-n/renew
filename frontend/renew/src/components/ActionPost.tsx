import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions,
    View
} from 'react-native';

interface Props {
    text: string;
    backgroundColour: string;
    onPress: () => void;
    children?: any;
}

export const ActionPost = ({text, backgroundColour, onPress, children}: Props) => {
    return (
        <View>
            <TouchableOpacity 
                style={{...styles.orientation, backgroundColor: backgroundColour}} onPress={onPress}
            >
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{...styles.orientationComent}} onPress={() => {}} 
            >
                <Text style={styles.comment}>View all comments</Text>
            </TouchableOpacity>
        </View>
        
    );
};

const styles = StyleSheet.create({
    orientation: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 106,
    },
    text: {
        fontFamily: 'VarelaRoundRegular',
        fontSize: 18,
        color: '#FFFFFF',
    },
    comment: {
        fontFamily: 'VarelaRoundRegular',
        fontSize: 12,
        color: '#839788',
    },
    orientationComent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});