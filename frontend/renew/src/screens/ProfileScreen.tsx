import React, { useContext, useState } from 'react';
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
import { AuthContext } from '../../navigation/AuthProvider';
import { ActionButton } from '../components/ActionButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colours } from '../components/constants';
import { ScreenContainer } from '../components/ScreenContainer';
import { ProfileOption } from '../components/ProfileOption';

interface Props {
    navigation: any,
}

export const ProfileScreen = ({navigation}: Props) => {
  // @ts-ignore
  const {logout} = useContext(AuthContext);
  const data = {name: "Lena Kim",
                email: "lena@gmail.com",
                from: "South Korea",
                to: "Canada",
                password: "xxxxxx"}
  
  return (
    <View>
        <Text style={styles.title}>Profile</Text> 
        <ScreenContainer>
            <View style={styles.profileOverview}>
                <Ionicons name="person-circle-outline" color={Colours.darkTurquoise} size={50} />
                <View style={styles.infoSection}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.residence}>{data.email}</Text>  
                    <Text style={styles.residence}>Country of origin: {data.from}</Text>  
                    <Text style={styles.residence}>Country of residence: {data.to}</Text>
                </View>
            </View>
            <View style={{height:20}} />
            <ProfileOption text={'Change Password'} icon={'key-outline'} />
            <ProfileOption text={'Update Email'} icon={'mail-outline'} />
            <View style={{height:'35%'}} />
            <ActionButton 
                    text={'Sign out'} 
                    backgroundColour={Colours.darkBlue} 
                    onPress={() => logout()}
            />
        </ScreenContainer>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
      fontFamily: 'VarelaRoundRegular',
      fontSize: 25,
      color: Colours.darkBlue,
      marginLeft: 20,
      marginTop: 20
    }, 
    name: {
        fontFamily: 'VarelaRoundRegular',
        fontSize: 25,
        color: Colours.darkTurquoise,
    }, 
    info: {
        marginTop: 30,
        fontFamily: 'VarelaRoundRegular',
        fontSize: 17,
        color: '#4A6FA5',
        alignSelf: 'center'
    }, 
    residence: {
        fontFamily: 'VarelaRoundRegular',
        fontSize: 16,
        color: Colours.darkTurquoise,
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
    profileOverview: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        marginVertical: 20,
        width: '90%',
        height: 126,
        borderColor: Colours.mediumGray,
        borderWidth: 1,
        padding: 10
    },
    infoSection: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 20
    }
});
