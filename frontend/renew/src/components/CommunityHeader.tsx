import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Colours } from './constants';

interface Props {
    name: string,
    origin: string,
    destination: string,
}

export const CommunityHeader = ({name, origin, destination}: Props) => (
    <View>
        <Text style={styles.name}>{name}'s Community</Text>
        <Text style={styles.subTitle}>This community includes people from {origin} who are now living in {destination}  </Text>
    </View>
);

const styles = StyleSheet.create({
    name: {
        alignItems: 'center',
        marginLeft: 21,
        justifyContent: 'center',
        marginTop: 20,
        fontFamily: 'VarelaRoundRegular',
        fontSize: 25,
        color: Colours.darkBlue,
    },
    subTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 21,
        marginTop: 10,
        marginBottom: 20,
        fontSize: 15,
        fontFamily: 'VarelaRoundRegular',
        color: '#839788',
    },
});