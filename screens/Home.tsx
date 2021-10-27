import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageProps, ScrollView } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from '../components/Themed';
import EventCard from '../components/EventCard';
import { RFPercentage } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../components/Header';


import masp from '../assets/images/mask.png'
import mercadola from '../assets/images/mercadola.jpg'
import lugar from '../assets/images/lugar.jpg'

interface Event {
    name: string,
    location: string,
    address: string,
    date: string,
    distance: string,
    image: ImageProps,
    description: string,
    confirmed: number // tem q trocar isso depois pra um obj/array com todos os confirmados
}

const events: Event[] = [
    {
        name: 'Exposição Z',
        location: 'MASP',
        address: 'Av. Paulista, 1000',
        date: '29 fev',
        distance: '12 km',
        image: masp,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ante turpis. Etiam porta auctor lectus ut dictum. Nullam elementum leo sit amet felis suscipit posuere. Aliquam erat volutpat. Nunc.',
        confirmed: 23
    },
    {
        name: 'Exposição Y',
        location: 'Praça da Sé',
        address: 'Av. Sé, 500',
        date: '10 mar',
        distance: '8 km',
        image: lugar,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ante turpis. Etiam porta auctor lectus ut dictum. Nullam elementum leo sit amet felis suscipit posuere. Aliquam erat volutpat. Nunc.',
        confirmed: 10
    },
    {
        name: 'Exposição X',
        location: 'Mercadão Municipio',
        address: 'Av. Mercado, 99',
        date: '25 dez',
        distance: '36 km',
        image: mercadola,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ante turpis. Etiam porta auctor lectus ut dictum. Nullam elementum leo sit amet felis suscipit posuere. Aliquam erat volutpat. Nunc.',
        confirmed: 28
    }
]

export default function Home(props: any) {

    const [currentEvent, setCurrentEvent] = React.useState<Event>(events[0])
    const [currentIndex, setCurrentIndex] = React.useState(0)

    function handleSwitchEvent() {
        console.warn(props);
        setCurrentEvent(events[(currentIndex + 1) % events.length])
        setCurrentIndex((currentIndex + 1) % events.length)
    }

    function handleConfirmEvent() {
        props.navigation.navigate('Event', { event: currentEvent });
    }

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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: hp('18%'),
        height: hp('18%'),
        borderRadius: 100,
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
