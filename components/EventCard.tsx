import { StyleSheet, Image, ImageProps } from 'react-native';
import { Text, View } from '../components/Themed';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";

export interface Props {
    event: Event,
} 

interface Event {
    name: string,
    location: string,
    address: string,
    date: string,
    distance: string,
    image: ImageProps,
    description: string,
    confirmed: number
}

const styles = StyleSheet.create({
    infoContainer: {
        marginBottom: 20
    },
    eventInfo: {
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal: 10,
        padding: 10,
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
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationName: {
        // fontSize: 18,
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold'
    },
    eventTitleContainer: {
        marginVertical: 20
    },
    eventTitle: {
        // fontSize: 28,
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200
    },
    distanceText: {
        color: '#6951FF',
        fontWeight: 'bold'
    }
});

export default function EventCard(props: Props) {

    return (
        <>
            <View style={styles.infoContainer}>
                <View style={styles.eventInfo}>
                    <View>
                        <Image source={props.event.image} style={styles.image} />
                    </View>
                    <View style={styles.eventTitleContainer}>
                        <Text style={styles.eventTitle}>{props.event.name}</Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationName}>{props.event.location}</Text>
                        <Text style={styles.distanceText}>{props.event.distance}</Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <View style={styles.addressContainer}>
                            <Ionicons name="location-sharp" size={24} color="black" style={{ marginRight: 4 }} />
                            <Text>{props.event.address}</Text>
                        </View>
                        <Text>{props.event.date}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

