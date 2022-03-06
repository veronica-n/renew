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
    user: string,
    backgroundColour: string;
    onPress: () => void;
    children?: any;
}

export const ActionPost = ({text, user, backgroundColour, onPress, children}: Props) => {
    return (
        <View>
            <Text style={styles.user}>{user} </Text>
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
    user: {
        textAlign: 'left',
        fontSize: 16,
        color: '#4F6D7A',
        fontFamily: 'VarelaRoundRegular',
        marginLeft: 10,
        marginBottom: 10,
      },
});