import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from "react-native";
import { ActionPostContent } from '../components/ActionPost';
import { CommunityHeader } from '../components/CommunityHeader';
import { Comment } from '../components/Comment';
import { Colours } from '../components/constants';
import { ScrollView } from 'react-native-gesture-handler';
import { TextField } from '../components/TextField';
import { ScreenContainer } from '../components/ScreenContainer';
import Feather from 'react-native-vector-icons/Feather';

interface Props {
    navigation: any,
    route: any,
}

export const ViewPostScreen = ({navigation, route}: Props) => {
    const {id, userId, user, content, backgroundColour, timestamp, comments} = route.params;
    const [commentList, setComments] = useState(comments);
    const [userComment, setUserComment] = useState('');

    return (
        <>
            <View style={{height: 12}} />
            <ActionPostContent text={content} backgroundColour={backgroundColour} user={user} onPress={() => {}}/>
            <ScrollView style={styles.commentList}>
                {commentList.map((comment: string) => {
                    return <Comment type={'user'} content={comment} />
                })}
            </ScrollView>
            <ScreenContainer>
                <View style={styles.commentBox}>
                    <TextField placeholder='Add a comment...' borderColour={Colours.mediumGray} onChangeText={setUserComment} />
                    <Feather style={{marginLeft: 10}} name="send" color={Colours.sageGreen} size={28} 
                             onPress={() => {
                                setComments([...commentList, userComment]);
                                setUserComment('');
                             }} 
                    />
                </View>
            </ScreenContainer>
        </>
    );
};

const styles = StyleSheet.create({
    border: {
        marginVertical: 12,
        backgroundColor: Colours.lightGray,
        height: 1.5,
        width: Dimensions.get('window').width
    },
    commentList: {
        height: '40%',
    },
    commentBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});