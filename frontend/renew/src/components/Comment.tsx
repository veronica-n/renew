import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Image,
    StyleProp,
    StyleSheetProperties
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colours } from './constants';

interface CommentProps {
    type: 'user' | 'app',
    content: string,
};

export const Comment = ({type, content}: CommentProps) => {
    return (
        <View style={styles.component}>
            <ProfileBubble type={type} />
            <View style={styles.commentBubble}>
                <Text style={styles.text}>{content}</Text>
            </View>
        </View>
    );
};

interface ProfileBubbleProps {
    type: 'user' | 'app';
    marginBottom?: number;
};

export const ProfileBubble = ({type, marginBottom}: ProfileBubbleProps) => {
    if (type == 'user') {
        return <Ionicons style={{marginBottom}} name="person-circle-outline" color={Colours.sageGreen} size={30} />
    } else {
        return <Image style={{marginBottom}} source={require('../assets/AppIcon.png')} />
    }
};

const styles = StyleSheet.create({
    component: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        marginTop: 16
    },
    commentBubble: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colours.lightBlue,
        borderRadius: 8,
        width: '80%',
        padding: 8,
        flexWrap: 'wrap',
        opacity: 0.5,
        overflow: 'hidden'
    },
    text: {
        fontSize: 15,
        fontFamily: 'VarelaRoundRegular',
        color: Colours.black,
        opacity: 3.5,
    }
});