import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { ActionPost } from '../components/ActionPost';
import { Colours } from '../components/constants';
import { ScreenContainer } from '../components/ScreenContainer';
import { CommunityHeader } from '../components/CommunityHeader';
import { Post, UserState } from '../state/types';

interface Props {
    navigation: any,
}

export const CommunityScreen = ({navigation}: Props) => {
    const [data, setData] = useState([
        {
            name: "Renew Team",
            post: 'Weekly Post: any new members in need of help?',
            uid: '111',
            key: '1',
            comments: [
                'I am getting settled in, going well so far',
                'Yes, are there any grocery stores in Vancouver that are hiring right now? I am looking for a job',
                'Walmart is hiring at multiple locations',
                'Shoppers Drug Mart at Metrotown is hiring associates',
            ],
        },
        {
            name: "Bob",
            post: "I'm new to the area, does anyone know where I can get shoes?",
            uid: '111',
            key: '2',
            comments: [
                'Hi! Winners has great choices for very reasonable prices', 
                '^ Agree!', 
                'My personal favourite is DSW',
            ]
        },
        {
            name: "Linda",
            post: "What's the best library in the Metro Vancouver area?",
            uid: '222',
            key: '3',
            comments: [
                'I love studying at the downtown library, the architecture is so beautiful!', 
                'Cameron library is small but cozy', 
                'Highly recommend any of the UBC libraries!',
            ]
          },
    ]);

    const addNewPost = (content: string) => {
        const newPost = {
            name: 'Lena',
            post: content,
            uid: (data.length + 1).toString(),
            key: (data.length + 1).toString(),
            comments: [],
        };

        setData(() => [
            ...data,
            newPost,
        ]);
    };

    const headerComponent = () => (
        <View>
            <CommunityHeader name={'Lena'} origin={'Korea'} destination={'Canada'} />
            <TouchableOpacity onPress={() => navigation.navigate("NewPostScreen", {addNewPost: addNewPost})}>
                <View style={styles.newPostBox}>
                    <Text style={styles.newPostText}>Create a post...</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.border}/>
        </View>
    )

    const separator = () => (
        <View style={styles.border}/>
    )

    return (
        <ScreenContainer>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ActionPost 
                        text={item.post} 
                        user={item.name} 
                        backgroundColour={item.name == 'Renew Team' ? Colours.darkTurquoise : Colours.sageGreen} 
                        onPress={() => navigation.navigate('ViewPostScreen', {
                            id: Math.random().toString(),
                            userId: Math.random().toString(),
                            user: item.name,
                            content: item.post,
                            backgroundColour: item.name == 'Renew Team' ? Colours.darkTurquoise : Colours.sageGreen,
                            timestamp: Date().toString(),
                            comments: item.comments
                        })}/>
                )}
                keyExtractor={item => item.key}
                ListHeaderComponent={headerComponent}
                ItemSeparatorComponent={separator}
            />
        </ScreenContainer>    
    );
};

const styles = StyleSheet.create({
    name: {
        alignItems: 'center',
        marginLeft: 21,
        justifyContent: 'center',
        marginTop: 20,
        fontFamily: 'VarelaRoundRegular',
        fontSize: 25,
        color: '#4A6FA5',
    },
    subTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 21,
        marginTop: 20,
        marginBottom: 27,
        fontSize: 15,
        fontFamily: 'VarelaRoundRegular',
        color: '#839788',
    },
    newPostBox: {
        marginHorizontal: 21,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colours.mediumGray,
        height: 80,
        alignItems: 'flex-start',
        paddingLeft: 8,
        paddingTop: 8,
        marginBottom: 15,
    },
    newPostText: {
        fontFamily: 'VarelaRoundRegular',
        color: Colours.mediumGray,
        fontSize: 15,
    },
    border: {
        marginVertical: 12,
        backgroundColor: '#E5E5E5',
        height: 1.5,
        width: Dimensions.get('window').width
    }
});
