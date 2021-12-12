import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import EventListCard from '../components/EventListCard';
import Header from '../components/Header';

import Event from '../interfaces/events';

/* to do: load the events dynamically from the api - the events the user went is not
 being registered by the time this comment is being writed */

const events: Event[] = [

    {
        name: 'Jovens Solistas',
        location: {
            address: 'Praça Ramos de Azevedo',
            image: 'https://www.infoescola.com/wp-content/uploads/2011/12/teatro-municipal-de-s%C3%A3o-paulo_460468993.jpg',
            name: 'TMSP',
        },
        begin: '7 nov',
        distance: '12 km',
        description: 'Orquestra Experimental de Repertório apresenta Concerto Encerramento Jovens Solistas',
        confirmed: 10
    },
    {

        name: 'Visita ao Mirante Sesc SP',
        location: {
            address: 'Av. Sé, 500',
            image: 'https://coisosonthego.com/wp-content/uploads/2018/05/O-SESC-Avenida-Paulista-e-seus-vizinhos-Ita%C3%BA-Cultural-e-Casa-das-Rosas.jpg',
            name: 'Avenida Paulista, 119',
        },
        begin: '07 nov',
        distance: '8 km',
        description: 'Visita ao mirante do SESC SP, grande oportunidade de uma visão mais abrangente da nossa cidade.',
        confirmed: 10
    },
]

export default function EventsWent({ route, navigation }: { route: any, navigation: any }) {

    function handleConfirmEvent() {
        //to navigate to the event, first, the events should be loaded from the api
        // navigation.navigate('Event', { event: eventTo });
    }

    return (
        <ScrollView style={styles.container}>
            <Header title="Eventos Participados" />

            {events.map((event, index) => (
                <EventListCard key={index} event={event} callback={handleConfirmEvent} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        flex: 1,
        backgroundColor: '#fff'
    }
});
