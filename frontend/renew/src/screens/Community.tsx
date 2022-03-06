import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { ActionButton } from '../components/ActionButton';
import { ActionPost } from '../components/ActionPost';
import { ActionText } from '../components/ActionText';
import { ScreenContainer } from '../components/ScreenContainer';

export const Community = ({navigation}) => {
    const data = [
        {
          name: "User #1",
          uid: '111',
          key: '1'
        },
        {
            name: "User #2",
            uid: '222',
            key: '2'
          },
        {
            name: "User #3",
            uid: '333',
            key: '3'
        }
    ];
    const headerComponent = () => (
        <View>
            <Text style={styles.name}>Person's Community</Text>
            <Text style={styles.subTitle}>This community includes people from ___ who are now living in ___  </Text>
            <ActionButton 
                text={'Create a Post'} 
                backgroundColour={'#4A6FA5'} 
                onPress={() => {}}
            />
            <View style={styles.border}/>
            <Text style={styles.team}>Renew Team </Text>
            <ActionPost text={'Weekly Post'} backgroundColour={'#4F6D7A'} onPress={() => {}} />
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
                    <ActionPost text={item.name} backgroundColour={'#839788'} onPress={() => navigation.navigate('Chat', {id: item.uid})}></ActionPost>
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
        fontFamily: 'Inter-Regular',
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'VarelaRoundRegular',
        color: '#4A6FA5',
      },
      subTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter-Regular',
        marginHorizontal: 21,
        marginTop: 20,
        marginBottom: 27,
        fontSize: 15,
        fontFamily: 'VarelaRoundRegular',
        color: '#839788',
      },
      team: {
        textAlign: 'left',
        fontSize: 16,
        color: '#4F6D7A',
        fontFamily: 'VarelaRoundRegular',
        marginLeft: 10,
        marginBottom: 10,
      },
      border: {
        marginVertical: 12,
        backgroundColor: '#E5E5E5',
        height: 1.5,
        width: Dimensions.get('window').width
      }
});
