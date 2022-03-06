import React, { useState } from 'react';
import { View, StyleSheet } from "react-native";
import { ActionButton } from '../components/ActionButton';
import { ActionText } from '../components/ActionText';
import { CommunityHeader } from '../components/CommunityHeader';
import { Colours } from '../components/constants';
import { ScreenContainer } from '../components/ScreenContainer';
import { TextField } from '../components/TextField';

interface Props {
    navigation: any,
    route: any,
}

export const NewPostScreen = ({navigation, route}: Props) => {
    const [post, setPost] = useState('');
    const {addNewPost} = route.params;

    return (
        <>
            <CommunityHeader name={'Lena'} origin={'Korea'} destination={'Canada'}/>
            <ScreenContainer>
                <TextField 
                    placeholder='Your post' 
                    borderColour={Colours.mediumGray} 
                    multiline
                    height={250}
                    width={'90%'}
                    onChangeText={setPost}
                />
                <View style={styles.actionSection}>
                <ActionButton 
                    text={'Publish'} 
                    backgroundColour={Colours.darkBlue} 
                    onPress={() => {
                        addNewPost(post);
                        navigation.goBack();
                    }}
                />
                <ActionText text={'Cancel'} colour={Colours.darkBlue} onPress={() => navigation.goBack()} />
                </View>
            </ScreenContainer>
        </>
    );
};

const styles = StyleSheet.create({
    actionSection: {
        width: '100%',
        alignItems: 'center',
        marginTop: '30%'
    },
});