import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageProps } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from '../components/Themed';

import masp from '../assets/images/mask.png'
import mercadola from '../assets/images/mercadola.jpg'
import lugar from '../assets/images/lugar.jpg'

interface Event {
    name: string,
    location: string,
    address: string,
    date: string,
    distance: string,
    image: ImageProps
}

const events: Event[] = [
    {
        name: 'Exposição Z',
        location: 'MASP',
        address: 'Av. Paulista, 1000',
        date: '29 fev',
        distance: '12 km',
        image: masp
    },
    {
        name: 'Exposição Y',
        location: 'Praça da Sé',
        address: 'Av. Sé, 500',
        date: '10 mar',
        distance: '8 km',
        image: lugar
    },
    {
        name: 'Exposição X',
        location: 'Mercadão Municipio',
        address: 'Av. Mercado, 99',
        date: '25 dez',
        distance: '36 km',
        image: mercadola
    }
]

export default function Home() {
    const [currentEvent, setCurrentEvent] = React.useState<Event>(events[0])
    const [currentIndex, setCurrentIndex] = React.useState(0)

    function handleSwitchEvent() {
        setCurrentEvent(events[(currentIndex+1) % events.length])
        setCurrentIndex((currentIndex+1) % events.length)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Entypo name="menu" size={48} style={styles.menuIcon}/>
                <Text style={styles.logoTitle}>MeeTour</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.eventInfo}>
                    <View>
                        <Image source={currentEvent.image} style={styles.image} /> 
                    </View>
                    <View style={styles.eventTitleContainer}>
                        <Text style={styles.eventTitle}>{currentEvent.name}</Text>
                    </View>
                    <View style={styles.locationContainer}> 
                        <Text style={styles.locationName}>{currentEvent.location}</Text>
                        <Text style={styles.distanceText}>{currentEvent.distance}</Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <View style={styles.addressContainer}>
                            <Ionicons name="location-sharp" size={24} color="black" style={{ marginRight: 4}} />
                            <Text>{currentEvent.address}</Text>
                        </View>
                        <Text>{currentEvent.date}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={handleSwitchEvent}>
                <AntDesign name="close" size={48} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.acceptButton]}>
                <LinearGradient
                    colors={['#6951FF', '#8A94F0']}
                    style={{
                    flex: 1,
                    position: 'absolute',
                    left: 0,
                    width: 120,
                    height: 120,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: -40,
                    paddingRight: 25,
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
        overflow: 'hidden',
        flex: 1
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    menuIcon: {
        color: '#6951FF',
        position: 'absolute',
        left: 5
    },
    logoTitle: {
        fontSize: 26,
        color: '#6951FF',
        fontWeight: 'bold',
    },
    infoContainer: {
        marginBottom: 100
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    eventTitleContainer: {
        marginVertical: 20
    },
    eventTitle: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    image: {
      width: '100%',
      height: 200
    },
    buttonsContainer: {
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
        width: 120,
        height: 120,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rejectButton: {
        marginLeft: -40,
        paddingLeft: 25
    },
    acceptButton: {
        marginRight: -40,
        paddingRight: 25,
    },
    distanceText: {
        color: '#6951FF',
        fontWeight: 'bold'
    }
  });
  