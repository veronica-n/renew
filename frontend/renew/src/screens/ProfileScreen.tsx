import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput
} from 'react-native';
import { ActionButton } from '../components/ActionButton';
import { ScreenContainer } from '../components/ScreenContainer';

interface Props {
    navigation: any,
}

export const ProfileScreen = ({navigation}: Props) => {
  const { height } = Dimensions.get('window');
  const data = {name: "Lena Kim",
                email: "lena@gmail.com",
                from: "South Korea",
                to: "Canada",
                password: "xxxxxx"}
  
  return (
    <View>
        
        <Text style={styles.title}>Profile</Text> 
        <View style={styles.rec}>
            <Text style={styles.name}>{data.name}</Text>  
            <Text style={styles.to}>{data.to}</Text>  
        </View> 
        <Text style={styles.info}>{data.email}</Text>  
        <View style={styles.border}/>
        <Text style={styles.info}>{data.from}</Text> 
        <View style={styles.border}/> 
        <Text style={styles.info}>{data.password}</Text>  
        <View style={styles.border}/>
        <Text style={styles.password}>Change password</Text>  
        <View style={styles.signout}>
        <ActionButton 
                text={'Sign out'} 
                backgroundColour={'#4A6FA5'} 
                onPress={() => {}}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
      marginTop: 41,
      marginLeft: 29,
      fontFamily: 'VarelaRoundRegular',
      fontSize: 25,
      color: '#4A6FA5',
      fontWeight: 'bold',
      }, 
    name: {
        marginTop: 20,
        fontFamily: 'VarelaRoundRegular',
        fontSize: 28,
        color: '#4A6FA5',
        fontWeight: 'bold',
        }, 
    info: {
        marginTop: 30,
        fontFamily: 'VarelaRoundRegular',
        fontSize: 17,
        color: '#4A6FA5',
        fontWeight: 'bold',
        alignSelf: 'center'
        }, 
    to: {
        marginTop: 10,
        fontFamily: 'VarelaRoundRegular',
        fontSize: 20,
        color: '#4A6FA5',
        }, 
    border: {
        marginVertical: 2,
        backgroundColor: '#4A6FA5',
        height: 1.5,
        width:'80%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    signout: {
        marginTop: 40, 
        alignItems: 'center'
    },
    password: {
        marginTop: 2,
        marginLeft: 150,
        alignSelf: 'center',
        fontFamily: 'VarelaRoundRegular',
        fontSize: 15,
        color: '#839788',
        }, 
    rec : {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        marginVertical: 20,
        width: '85%',
        height: 136,
        color: '#4A6FA5',
        borderColor: '#4A6FA5',
        borderWidth: 1,
    }
});
