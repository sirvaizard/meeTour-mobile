import { StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
import * as React from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    header: {
        marginTop: hp('4%'),
        marginBottom: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoTitle: {
        fontSize: RFPercentage(3.5),
        color: '#6951FF',
        fontWeight: 'bold',
    },
});

export default function EventCard() {

    return (
        <>
           <View style={styles.header}>
                <Text style={styles.logoTitle}>MeeTour</Text>
            </View>
        </>
    )
}

