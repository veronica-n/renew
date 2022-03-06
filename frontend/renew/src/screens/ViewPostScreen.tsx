import React from 'react';
import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import { ActionPostContent } from '../components/ActionPost';
import { CommunityHeader } from '../components/CommunityHeader';
import { Comment } from '../components/Comment';
import { Colours } from '../components/constants';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
    navigation: any,
    route: any,
}

export const ViewPostScreen = ({navigation, route}: Props) => {
    const {id, userId, user, content, backgroundColour, timestamp, comments} = route.params;
    console.log(id);
    return (
        <>
            <CommunityHeader name={'Lena'} origin={'Korea'} destination={'Canada'}/>
            <View style={styles.border}/>
            <ActionPostContent text={content} backgroundColour={backgroundColour} user={user} onPress={() => {}}/>
            <ScrollView>
                {comments.map((comment: string) => {
                    return <Comment type={'user'} content={comment} />
                })}
            </ScrollView>
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
});
