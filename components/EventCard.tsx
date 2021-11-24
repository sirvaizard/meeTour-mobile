import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import React, {useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Event from '../interfaces/events';

export interface Props {
    event: Event,
} 

const styles = StyleSheet.create({
    eventInfo: {
        marginHorizontal: wp('3%'),
        paddingHorizontal: wp('2%'),
        padding: wp('2%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp('1%'),
        paddingHorizontal: wp('3%')
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationName: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
    },
    eventTitleContainer: {
        marginVertical: hp('2.5%'),
        paddingHorizontal: wp('3%')
    },
    eventTitle: {
        fontSize: RFPercentage(3.5),
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: hp('30%')
    },
    distanceText: {
        color: '#6951FF',
        fontWeight: 'bold'
    }
});

export default function EventCard(props: Props) {

    useEffect(() => console.log(props), []);

    return (
        <>
            <View >
                <View style={styles.eventInfo}>
                    <View>
                        <Image source={{uri: props.event.location.image}} style={styles.image} />
                    </View>
                    <View style={styles.eventTitleContainer}>
                        <Text style={styles.eventTitle}>{props.event.name}</Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationName}>{props.event.location.name}</Text>
                        <Text style={styles.distanceText}> 1km </Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <View style={styles.addressContainer}>
                            <Ionicons name="location-sharp" size={24} color="black" style={{ marginRight: 4 }} />
                            <Text>{props.event.location.address}</Text>
                        </View>
                        <Text>{new Date(props.event.begin).toLocaleDateString('pt-BR')}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

