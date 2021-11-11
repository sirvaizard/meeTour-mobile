import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageProps, ScrollView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from '../components/Themed';
import { RFPercentage } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import EventCard from '../components/EventCard';
import Header from '../components/Header';
import pinguins from '../assets/images/pinguins.jpg';

let placeImages: ImageProps[] = [pinguins, pinguins, pinguins];
let array: number[] = [1, 2, 3];

export default function Event({ route, navigation }) {

    function handleConfirmedPeopleBtn() {
        alert('alo pessoas')
        navigation.navigate('Confirmed');
    }

    function handleCancelBtn() {
        navigation.navigate('Home');
    }

    function handleConfirmBtn() {
        // console.log("Navigate to schedule screen");
        navigation.navigate('Agenda');
    }

    function handleSeeAllImages() {
        // console.log("Show all instagram images");
    }

    return (
        <ScrollView style={styles.container}>

            <Header />

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


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    confirmedPeopleBtn: {
        display: 'flex',
        margin: 'auto',
        marginHorizontal: wp('3%'),
        borderRadius: 15,
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
        paddingVertical: hp('2.5%'),
        paddingHorizontal: wp('5%'),

        borderColor: '#6868683d',
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,

        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 3,
        //     height: 5,
        // },
        // shadowOpacity: 0.15,
        // shadowRadius: 3.84,
        // elevation: .75,

    },
    confirmedPeopleBtnNumber: {
        display: 'flex',
        alignItems: 'center',
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
    },
    confirmedPeopleBtnTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: RFPercentage(2)
    },
    descriptionContainer: {
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
    placeImagesSection: {
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
    placeImagesSectionBottomText:{
        color: '#6951FF'
    },
    placeImagesContainer: {
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

        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },

});
