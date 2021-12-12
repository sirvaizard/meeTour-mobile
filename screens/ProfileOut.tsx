import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { Text, View } from '../components/Themed';
import { Ionicons } from "@expo/vector-icons";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BntRectangle from '../components/BtnRectangle';

import User from '../interfaces/user';

const avatar = "https://img.buzzfeed.com/buzzfeed-static/static/2020-06/9/4/asset/e5cf8466bc6f/sub-buzz-11718-1591678685-12.png"

export default function ProfileOut({ route, navigation }: { route: any, navigation: any }) {

    const [userInfo, setUserInfo] = useState<User>({}); 

    function handleEventsWent() {
        navigation.navigate('EventsWent');
    }

    function loadUserInfo() {

        setUserInfo(route.params.userInfo);
        
    }

    useFocusEffect(useCallback(loadUserInfo, []));

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header} />

            <View style={styles.bioContainer}>
                <Image source={{ uri: avatar }} style={styles.image} />
                <Text style={styles.name}>{userInfo.name}</Text>
                <Text style={styles.bio}>{userInfo.bio}</Text>
            </View>

            <BntRectangle
                route={route}
                number={2}
                text="Eventos participados"
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
        backgroundColor: 'white',
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
        color: 'black',
        fontSize: RFPercentage(3),
        fontWeight: 'bold'
    },
    bio: {
        color: 'black',
        paddingHorizontal: wp('7%'),
        marginTop: 10,
        textAlign: 'center'
    },
    interestsContainer: {
        backgroundColor: 'white',
        width: wp('100%'),
        padding: wp('5%')
    },
    interestsTitle: {
        fontSize: RFPercentage(2.5),
        color: '#6951FF',
        fontWeight: 'bold',

    },
    interestsBtnsContainer: {
        backgroundColor: 'white',
        width: wp('90%'),
        marginTop: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    btnInterest: {
        backgroundColor: 'white',
        alignItems: 'center',
        textAlign: 'center',
        width: wp('23%'),
        paddingBottom: 2,
        borderRadius: 10,
        borderColor: '#8A94F0',
        borderWidth: 2,
    },
    btnInterestCaption: {
        fontSize: RFPercentage(2),
        color: '#6951FF',
        fontWeight: 'bold'
    }
});
