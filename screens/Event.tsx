import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageProps } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from '../components/Themed';

import EventCard from '../components/EventCard';

import pinguins from '../assets/images/pinguins.jpg';

let placeImages: ImageProps[] = [pinguins, pinguins, pinguins];
let array: number[] = [1, 2, 3];

export default function Event({ route, navigation }) {

    function handleConfirmedPeopleBtn() {
        console.log("Navigate to participants screen");
    }

    function handleCancelBtn() {
        navigation.navigate('Home');
    }

    function handleConfirmBtn() {
        console.log("Navigate to schedule screen");
    }

    function handleSeeAllImages() {
        console.log("Show all instagram images");
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Entypo name="menu" size={48} style={styles.menuIcon} />
                <Text style={styles.logoTitle}>MeeTour</Text>
            </View>

            <EventCard event={route.params.event} />

            <TouchableOpacity style={styles.confirmedPeopleBtn} onPress={handleConfirmedPeopleBtn}>
                <Text style={styles.confirmedPeopleBtnNumber}>{route.params.event.confirmed}</Text>
                <View style={styles.confirmedPeopleBtnTextContainer} >
                    <Text>Pessoas confirmaram presença</Text>
                    <Ionicons name="arrow-forward" size={25} color="black" />
                </View>
            </TouchableOpacity>

            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Descrição do Evento</Text>
                <Text>{route.params.event.description}</Text>
            </View>

            <View style={styles.placeImagesSection}>

                <Text style={styles.placeImagesSectionTitle}>Fotos do local no Instagram</Text>

                <View style={styles.placeImagesContainer}>
                    <Image source={placeImages[0]} style={styles.placeImage} />
                    <Image source={placeImages[1]} style={styles.placeImage} />
                    <Image source={placeImages[2]} style={styles.placeImage} />
                </View>
                <TouchableOpacity style={styles.placeImagesSectionBottom} onPress={handleSeeAllImages}> 
                    <Text style={styles.placeImagesSectionBottomText}>Ver todas as fotos</Text>
                    <Ionicons name="arrow-forward" size={25} color="#6951FF" />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.btnCircle} onPress={handleCancelBtn}>
                    <Ionicons name="close" size={48} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCircle} onPress={handleConfirmBtn}>
                    <LinearGradient
                        colors={['#6951FF', '#8A94F0']}
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Ionicons name="checkmark" size={48} color="white" />
                    </LinearGradient>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        flex: 1,
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
    confirmedPeopleBtn: {
        display: 'flex',
        margin: 'auto',
        marginHorizontal: 10,
        borderRadius: 15,
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    confirmedPeopleBtnNumber: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 23,
        fontWeight: 'bold',

    },
    confirmedPeopleBtnTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 18
    },
    descriptionContainer: {
        display: 'flex',
        marginHorizontal: 25,
        marginVertical: 15,
        fontSize: 16

    },
    descriptionTitle: {
        color: '#6951FF',
        fontSize: 17,
        marginBottom: 3
    },
    placeImagesSection: {
        display: 'flex',
        marginHorizontal: 10,
        marginVertical: 15,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    placeImagesSectionTitle: {
        fontSize: 17,
        color: '#6951FF',
        alignSelf: 'flex-start',
        marginBottom: 3
    },
    placeImagesSectionBottom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    placeImagesSectionBottomText:{
        color: '#6951FF'
    },
    placeImagesContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    placeImage: {
        width: 120,
        height: 120,
        margin: 2
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 250,
        marginHorizontal: 'auto',
        marginTop: 15,
        marginBottom: 50
    },
    btnCircle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

});
