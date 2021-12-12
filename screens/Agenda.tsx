import React, {useState, useContext, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet,ScrollView } from 'react-native';
import api from "../services/api";
import { CredentialsContext } from '../components/CredentialsContext';
import Event from '../interfaces/events';
import EventListCard from '../components/EventListCard';
import Header from '../components/Header';

export default function Agenda({ navigation }: { navigation: any}) {

    const [events, setEvent] = useState<Event[]>([]);
    const { storedCredentials } = useContext(CredentialsContext);

    useFocusEffect( useCallback(() => {

        //to do: handle the errors in a better way
        if(storedCredentials){
            api.get(`/scheduling`,
                {
                    headers: {
                        Authorization: 'Bearer ' + storedCredentials.token
                    }
                })
                .then((res) => {
                    setEvent(res.data);
                })
                .catch(error => console.log(error));
        }

    }, []));
   
    function handleShowEvent(eventTo: Event) {
        navigation.navigate('Event', { event: eventTo, mode: "view" });
    }

    return (
        <ScrollView style={styles.container}>
           
            <Header title="Agenda" />

            { events.map((event, index) => (
                <EventListCard key={index} event={event} callback={handleShowEvent} />
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
