import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions,
    View
} from 'react-native';
import { ProfileBubble } from './Comment';

interface Props {
    text: string;
    user: string,
    backgroundColour: string;
    type?: 'app' | 'user';
    onPress: () => void;
    children?: any;
}

export const ActionPost = ({text, user, backgroundColour, onPress, children}: Props) => {
    return (
        <View>
            <ActionPostContent text={text} user={user} type={user === 'Renew Team' ? 'app' : 'user'}
                               backgroundColour={backgroundColour} onPress={onPress} />
            <TouchableOpacity 
                style={{...styles.orientationComent}} onPress={onPress} 
            >
                <Text style={styles.comment}>View all comments</Text>
            </TouchableOpacity>
        </View>
    );
};

export const ActionPostContent = ({text, user, backgroundColour, type, onPress, children}: Props) => {
    return (
        <View> 
            <View style={styles.postHeader}>
                <ProfileBubble marginBottom={10} type={type ?? 'app'} />
                <Text style={styles.user}>{user} </Text>
            </View>
            <TouchableOpacity 
                style={{...styles.orientation, backgroundColor: backgroundColour}} onPress={onPress}
            >
                <Text style={styles.text}>{text}</Text>
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
        marginBottom: 8,
        paddingHorizontal: 5
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
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    }
});