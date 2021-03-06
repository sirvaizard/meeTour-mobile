import { StyleSheet, TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import React from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';


const styles = StyleSheet.create({
    confirmedPeopleBtn: {
        display: 'flex',
        margin: 'auto',
        marginHorizontal: wp('3%'),
        borderRadius: 15,
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
        paddingVertical: hp('2.5%'),
        paddingHorizontal: wp('5%'),

        backgroundColor: 'white',
        borderColor: '#6868683d',
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,

    },
    confirmedPeopleBtnNumber: {
        display: 'flex',
        color: '#6951FF',
        alignItems: 'center',
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
    },
    confirmedPeopleBtnTextContainer: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: RFPercentage(2)
    },
    confirmedPeopleBtnText: {
        color: 'black'
    }
});

export default function BntRectangle({ route, number, text, callback}: {route: any, number: number, text: string, callback: () => void}) {

    return (
        <>
           <TouchableOpacity style={styles.confirmedPeopleBtn} onPress={callback}>
                <Text style={styles.confirmedPeopleBtnNumber}>{number}</Text>
                <View style={styles.confirmedPeopleBtnTextContainer} >
                    <Text style={styles.confirmedPeopleBtnText}>{text}</Text>
                    <Ionicons name="arrow-forward" size={25} color="black" />
                </View>
            </TouchableOpacity>
        </>
    )
}

