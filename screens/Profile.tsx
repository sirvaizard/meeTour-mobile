import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";
import { Text, View } from '../components/Themed';
import { Ionicons } from "@expo/vector-icons";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BntRectangle from '../components/BtnRectangle';

import mercadola from '../assets/images/mercadola.jpg'


export default function Agenda({ route }: { route: any }) {

    function handleEventsWent() {
        console.warn("Navigate to participants screen");
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header} />

            <View style={styles.bioContainer}>
                <Image source={mercadola} style={styles.image} />
                <Text style={styles.name}>Adalberto Shindy, 23</Text>
                <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ante turpis. Etiam porta auctor lectus ut dictum.</Text>
            </View>

            <BntRectangle
                route={route}
                number={15}
                text="Pessoas confirmaram presença"
                callback={handleEventsWent}
            />

            <View style={styles.interestsContainer}>
                <Text style={styles.interestsTitle}>Interesses</Text>

                <View style={styles.interestsBtnsContainer}>
                    <TouchableOpacity style={styles.btnInterest}>
                        <Ionicons name="game-controller-outline" size={60} color="#6951FF" />
                        <Text style={styles.btnInterestCaption}>Jogos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnInterest}>
                        <Ionicons name="musical-notes-outline" size={60} color="#6951FF" />
                        <Text style={styles.btnInterestCaption}>Música</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnInterest}>
                        <Ionicons name="code-slash-outline" size={60} color="#6951FF" />
                        <Text style={styles.btnInterestCaption}>Tecnologia</Text>
                    </TouchableOpacity>

                </View>

            </View>

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
        display: 'flex',
        alignContent: 'flex-end',

        marginTop: -hp('60%'),
        marginLeft: -wp('25%'),
        height: wp('150%'),
        width: wp('150%'),
        backgroundColor: '#6951FF',
        borderRadius: 300

    },
    bioContainer: {
        width: wp('100%'),
        alignItems: 'center',
        marginBottom: 15
    },
    image: {
        width: wp('30%'),
        height: wp('30%'),
        marginTop: -hp('8%'),
        margin: 'auto',
        borderRadius: 100,
    },
    name: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold'
    },
    bio: {
        paddingHorizontal: wp('7%'),
        marginTop: 10,
        textAlign: 'center'
    },
    interestsContainer: {
        width: wp('100%'),
        padding: wp('5%')
    },
    interestsTitle: {
        fontSize: RFPercentage(2.5),
        color: '#6951FF',
        fontWeight: 'bold'
    },
    interestsBtnsContainer: {
        width: wp('90%'),
        marginTop: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    btnInterest:{
        alignItems: 'center',
        textAlign: 'center',
        width: wp('23%'),
        paddingBottom: 2,
        borderRadius: 10,
        borderColor: '#6951FF',
        borderWidth: 2
    },
    btnInterestCaption:{
        fontSize: RFPercentage(2),
        color: '#6951FF',
    }
});
