import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageProps, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';

import masp from '../assets/images/mask.png'
import mercadola from '../assets/images/mercadola.jpg'
import lugar from '../assets/images/lugar.jpg'

const eventos = [
    {
        image: masp,
        name: 'Exibição X',
        local: 'MASP',
        data: '27 de Fevereiro - Faltam 4 dias',
        endereco: 'Av. Paulista, 1001'
    },
    {
        image: mercadola,
        name: 'Convenção Y',
        local: 'Mercadão',
        data: '12 de Setembro - Faltam 24 dias',
        endereco: 'Av. Paulista, 100'
    },
    {
        image: lugar,
        name: 'Evento Z',
        local: 'Sé',
        data: '02 de Dezembro - Faltam 99 dias',
        endereco: 'Av. Paulista, 99'
    }
]

export default function Agenda({ route, navigation }: {route: any, navigation: any}) {
    function handleConfirmEvent() {
        // navigation.navigate('Event', { event: eventTo });
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logoTitle}>Agenda</Text>
            </View>

            { eventos.map((evento, index) => (
                <View key={String(index)} style={styles.eventContainer}>
                    <TouchableOpacity onPress={handleConfirmEvent}>
                        <View style={styles.titleContainer}>
                            <Image source={evento.image} style={styles.image} />
                            <View>
                                <Text style={styles.eventTitle}>{ evento.name }</Text>
                                <Text style={styles.eventLocation}>{ evento.local }</Text>
                            </View>
                        </View>
                        <View style={styles.eventInfoContainer}>
                            <View style={styles.eventInfoItem}>
                                <FontAwesome size={18} name="calendar" />
                                <Text style={styles.data}>{ evento.data }</Text>
                            </View>
                            <View style={styles.eventInfoItem}>
                                <FontAwesome size={18} name="map-marker" />
                                <Text style={styles.endereco}>{ evento.endereco }</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '15'
    },
    logoTitle: {
        fontSize: 26,
        color: '#6951FF',
        fontWeight: 'bold',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 16
    },
    eventContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginHorizontal: 15,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    eventTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    eventLocation: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    data: {
        marginBottom: 10,
        marginLeft: 5,
    },
    endereco: {
        marginLeft: 5,
    },
    eventInfoContainer: {
        marginTop: 15
    },
    eventInfoItem: {
        flexDirection: 'row',
        alignContent: 'center',
        marginLeft: 5
    }
});
