import React, {useState, useEffect, useContext, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import api from "../services/api";
import { CredentialsContext } from '../components/CredentialsContext';
import Event from '../interfaces/events';

export default function Agenda({ route, navigation }: {route: any, navigation: any}) {

    const [events, setEvent] = useState<Event[]>([]);
    const { storedCredentials } = useContext(CredentialsContext);

    useFocusEffect( useCallback(() => {

        console.log("--------------------------------#");
        console.log(storedCredentials.token);

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
            <View style={styles.header}>
                <Text style={styles.logoTitle}>Agenda</Text>
            </View>

            { events.map((event, index) => (
                <View key={String(index)} style={styles.eventContainer}>
                     <TouchableOpacity onPress={() => {handleShowEvent(event)}}>
                         <View style={styles.titleContainer}>
                             <Image source={{uri: event.location.image}} style={styles.image} />
                             <View style={{width: '80%'}}>
                                 <Text style={styles.eventTitle}>{ event.name }</Text>
                                 <Text style={styles.eventLocation}>{ event.location.name }</Text>
                             </View>
                         </View>
                         <View style={styles.eventInfoContainer}>
                             <View style={styles.eventInfoItem}>
                                 <FontAwesome size={18} name="calendar" />
                                 <Text style={styles.data}>{ new Date(event.begin).toLocaleDateString('pt-BR')}</Text>
                             </View>
                             <View style={styles.eventInfoItem}>
                                 <FontAwesome size={18} name="map-marker" />
                                 <Text style={styles.endereco}>{ event.location.address }</Text>
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
