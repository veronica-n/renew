import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colours } from './constants';

interface Props {
    text: string;
    icon: string;
    children?: any;
}

export const ProfileOption = ({text, icon, children}: Props) => {
    return (
        <TouchableOpacity style={styles.profileOption}>
              <Ionicons name={icon} color={Colours.darkTurquoise} size={25} />
              <Text style={styles.optionsText}>{text}</Text>
              <MaterialCommunityIcons name="chevron-right" color={Colours.darkTurquoise} size={35}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    profileOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopColor: Colours.lightGray,
        borderBottomColor: Colours.lightGray,
        borderWidth: 1,
        width: '100%',
        padding: 10
    },
    optionsText: {
        fontFamily: 'VarelaRoundRegular',
        fontSize: 16,
        color: Colours.darkTurquoise,
    }
});