import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { FontAwesome } from '@expo/vector-icons';

import Event from '../interfaces/events';

export interface Props {
    event: Event,
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 16
    },
    eventContainer: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,

        marginHorizontal: 15,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    eventTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    eventLocation: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    date: {
        color: 'black',
        marginBottom: 10,
        marginLeft: 5,
    },
    endereco: {
        color: 'black',
        marginLeft: 5,
    },
    eventInfoContainer: {
        backgroundColor: 'white',
        marginTop: 15
    },
    eventInfoItem: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignContent: 'center',
        marginLeft: 5
    }
});

export default function EventListCard({ event, callback } : {event: Event, callback: Function}) {

    return (
        <>
            <View style={styles.eventContainer}>
                <TouchableOpacity onPress={() => { callback(event) }}>
                    <View style={styles.titleContainer}>
                        <Image source={{ uri: event.location.image }} style={styles.image} />
                        <View style={{ backgroundColor: 'white', width: '75%' }}>
                            <Text style={styles.eventTitle}>{event.name}</Text>
                            <Text style={styles.eventLocation}>{event.location.name}</Text>
                        </View>
                    </View>
                    <View style={styles.eventInfoContainer}>
                        <View style={styles.eventInfoItem}>
                            <FontAwesome size={18} name="calendar" />
                            <Text style={styles.date}>{new Date(event.begin).toLocaleDateString('pt-BR')}</Text>
                        </View>
                        <View style={styles.eventInfoItem}>
                            <FontAwesome size={18} name="map-marker" />
                            <Text style={styles.endereco}>{event.location.address}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

