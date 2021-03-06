import React, { useContext } from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageProps, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from '../components/Themed';
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import api from "../services/api";
import { CredentialsContext } from '../components/CredentialsContext';

import EventCard from '../components/EventCard';
import BntRectangle from '../components/BtnRectangle';
import Header from '../components/Header';
import placeholderImg from '../assets/images/placeholder.jpg';


let placeImages: ImageProps[] = [placeholderImg, placeholderImg, placeholderImg];

export default function Event({ route, navigation }: { route: any, navigation: any }) {

    const { event, mode } = route.params;
    const { storedCredentials } = useContext(CredentialsContext);

    async function handleConfirmBtn(id: number) {

        //to do: check if the user isn't already confirmed in the selected event

        await api.post(`/event/${id}/join`, {},
            {
                headers: {
                    Authorization: 'Bearer ' + storedCredentials.token
                }
            })
            .then(() => navigation.navigate('Agenda'))
            .catch(err => {
                console.log(err);
            })
    }

    function handleCancelBtn() {
        navigation.navigate('Home');
    }

    function handleConfirmedPeopleBtn() {
        navigation.navigate('Confirmed', { participants: event.attendees });
    }

    function handleSeeAllImages() {
        // to do: load the instagram images from the instagram api
    }

    return (
        <ScrollView style={styles.container}>

            <Header />

            <EventCard event={event} />

            <BntRectangle
                route={route}
                number={event.attendees.length}
                text="Pessoas confirmaram presen??a"
                callback={handleConfirmedPeopleBtn}
            />

            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Descri????o do Evento</Text>
                <Text style={styles.descriptionText}>{event.description}</Text>
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

            {mode !== "view" &&

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.btnCircle} onPress={handleCancelBtn}>
                        <Ionicons name="close" size={48} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCircle} onPress={() => handleConfirmBtn(event.id)}>
                        <LinearGradient
                            colors={['#6951FF', '#8A94F0']}
                            style={{
                                width: wp('25%'),
                                height: wp('25%'),
                                borderRadius: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons name="checkmark" size={48} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            }


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    descriptionContainer: {
        backgroundColor: 'white',
        display: 'flex',
        marginHorizontal: wp('6%'),
        marginVertical: hp('2%'),
        fontSize: RFPercentage(2)

    },
    descriptionTitle: {
        color: '#6951FF',
        fontSize: RFPercentage(3),
        marginBottom: 3
    },
    descriptionText: {
        color: 'black'
    },
    placeImagesSection: {
        backgroundColor: '#fff',
        display: 'flex',
        marginHorizontal: 10,
        marginVertical: 15,
        padding: 10,
        borderRadius: 15,
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
        fontSize: RFPercentage(3),
        color: '#6951FF',
        alignSelf: 'flex-start',
        marginBottom: 4,
        paddingLeft: wp('1%')
    },
    placeImagesSectionBottom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    placeImagesSectionBottomText: {
        color: '#6951FF'
    },
    placeImagesContainer: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp('3%'),
    },
    placeImage: {
        width: wp('28%'),
        height: wp('28%'),
        margin: wp('.8%')
    },
    buttonsContainer: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp('70%'),
        marginLeft: wp('15%'),
        marginTop: hp('4%'),
        marginBottom: hp('8%')
    },
    btnCircle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('25%'),
        height: wp('25%'),
        borderRadius: 100,

        borderColor: '#6868683d',
        borderBottomWidth: 3,
        borderTopWidth: 0,
        borderLeftWidth: 3,
        borderRightWidth: 1,

    },

});
