import React, { useContext, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageProps, ScrollView } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from '../components/Themed';
import EventCard from '../components/EventCard';
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../components/Header';

import { CredentialsContext } from '../components/CredentialsContext';
import api from "../services/api";

interface Event {
    name: string,
    location: string,
    address: string,
    begin: string,
    distance: string,
    image: string,
    description: string,
    confirmed: number // tem q trocar isso depois pra um obj/array com todos os confirmados
}

export default function Home(props: any) {


    const [events, setEvents] = React.useState<Event[]>([]);
    const [currentEvent, setCurrentEvent] = React.useState<Event>();
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const { storedCredentials } = useContext(CredentialsContext);

    function handleSwitchEvent() {
        setCurrentEvent(events[(currentIndex + 1) % events.length])
        setCurrentIndex((currentIndex + 1) % events.length)
    }

    function handleConfirmEvent() {
        props.navigation.navigate('Event', { event: currentEvent });
    }

    useEffect(() => {

        console.log("--------------------------------#");
        console.log(storedCredentials.token);

        if(storedCredentials){
            api.get(`/event?latitude=10&longitude=10&radius=10`,
                {
                    headers: {
                        Authorization: 'Bearer ' + storedCredentials.token
                    }
                })
                .then((res) => {
                    setEvents(res.data);
                    setCurrentEvent(res.data[0]);
                })
                .catch(error => console.log(error));
        }

    }, [storedCredentials]);

    if (!storedCredentials.token || !events || events.length === 0 || !currentEvent ) return null;
    else {
        return (
            <View style={styles.container}>

                <Header />

                <EventCard event={currentEvent} />
    
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={handleSwitchEvent}>
                        <AntDesign name="close" size={48} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={handleConfirmEvent}>
                        <LinearGradient
                            colors={['#6951FF', '#8A94F0']}
                            style={{
                                flex: 1,
                                position: 'absolute',
                                left: 0,
                                width: hp('18%'),
                                height: hp('18%'),
                                borderRadius: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: -hp('5%'),
                                paddingRight: hp('4%'),
                            }}
                        >
                            <Ionicons name="arrow-forward" size={48} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        backgroundColor: '#fff',
        position: 'relative'
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: hp('12%'),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        borderColor: '#6868683d',
        borderBottomWidth: 3,
        borderTopWidth: 0,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        width: hp('18%'),
        height: hp('18%'),
        borderRadius: hp('18%') / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rejectButton: {
        marginLeft: -hp('5%'),
        paddingLeft: hp('4%'),
        paddingTop: hp('1.1%')
    },
    acceptButton: {
        marginRight: -hp('5%'),
        paddingRight: hp('4%'),
    }
});
