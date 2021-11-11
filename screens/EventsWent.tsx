import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageProps, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';

const eventos = [

    {
        name: 'Jovens Solistas',
        location: 'TMSP',
        address: 'Praça Ramos de Azevedo',
        date: '7 nov',
        distance: '12 km',
        image: 'https://www.infoescola.com/wp-content/uploads/2011/12/teatro-municipal-de-s%C3%A3o-paulo_460468993.jpg',
        description: 'Orquestra Experimental de Repertório apresenta Concerto Encerramento Jovens Solistas',
        confirmed: 10
      },
      {
        name: 'Visita ao Mirante Sesc SP',
        location: 'Avenida Paulista, 119',
        address: 'Av. Sé, 500',
        date: '07 nov',
        distance: '8 km',
        image: 'https://coisosonthego.com/wp-content/uploads/2018/05/O-SESC-Avenida-Paulista-e-seus-vizinhos-Ita%C3%BA-Cultural-e-Casa-das-Rosas.jpg',
        description: 'Visita ao mirante do SESC SP, grande oportunidade de uma visão mais abrangente da nossa cidade.',
        confirmed: 10
      },
]

export default function EventsWent({ route, navigation }: {route: any, navigation: any}) {
   
    function handleConfirmEvent() {
        // navigation.navigate('Event', { event: eventTo });
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logoTitle}>Eventos participados</Text>
            </View>

            { eventos.map((evento, index) => (
                <View key={String(index)} style={styles.eventContainer}>
                     <TouchableOpacity onPress={handleConfirmEvent}>
                         <View style={styles.titleContainer}>
                             <Image source={{uri: evento.image}} style={styles.image} />
                             <View style={{width: '80%'}}>
                                 <Text style={styles.eventTitle}>{ evento.name }</Text>
                                 <Text style={styles.eventLocation}>{ evento.location }</Text>
                             </View>
                         </View>
                         <View style={styles.eventInfoContainer}>
                             <View style={styles.eventInfoItem}>
                                 <FontAwesome size={18} name="calendar" />
                                 <Text style={styles.data}>{ evento.date }</Text>
                             </View>
                             <View style={styles.eventInfoItem}>
                                 <FontAwesome size={18} name="map-marker" />
                                 <Text style={styles.endereco}>{ evento.address }</Text>
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
        marginBottom: 15
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
