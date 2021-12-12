import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import { Text, View } from '../components/Themed';
import { Ionicons } from "@expo/vector-icons";
//https://snack.expo.dev/@miblanchard/@miblanchard-react-native-slider
import { Slider } from "@miblanchard/react-native-slider";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BntRectangle from '../components/BtnRectangle';

import api from "../services/api";
import { CredentialsContext } from '../components/CredentialsContext';
import User from '../interfaces/user';

const avatar = "https://img.buzzfeed.com/buzzfeed-static/static/2020-06/9/4/asset/e5cf8466bc6f/sub-buzz-11718-1591678685-12.png"

export default function Profile({ route, navigation }: { route: any, navigation: any }) {

    const { storedCredentials } = useContext(CredentialsContext);
    const defaultSliderValue = 150; //to do: api call to load the user specifc value
    const [sliderValue, setSliderValue] = React.useState<any>(defaultSliderValue);
    const [userInfo, setUserInfo] = useState<User>({ name: "", bio: "", cpf: "", birth: "", email: "", id: -1}); 

    function handleEventsWent() {
        navigation.navigate('EventsWent');
    }

    function handleSaveChanges() {
        //to do: call the api to save the changes save the changes 
        console.log(sliderValue);
    }

    function loadUserInfo() {

        // to do: handle the errors in a better way
        if (storedCredentials) {
            api.get(`/user/${storedCredentials.id}`,
                {
                    headers: {
                        Authorization: 'Bearer ' + storedCredentials.token
                    }
                })
                .then((res) => {
                    setUserInfo(res.data);
                })
                .catch(error => console.log(error));
        }
    }

    useEffect(() => {
        loadUserInfo();
    }, []);

    useEffect(() => {
        loadUserInfo();
    }, [storedCredentials]);

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


                <View style={styles.sliderContainer}>
                    <Text style={styles.sliderContainerTitle}>Raio de busca por eventos</Text>

                    <Text style={styles.sliderValue}>{sliderValue}km</Text>

                    <Slider
                        animateTransitions
                        thumbTintColor="#5942ee"
                        maximumTrackTintColor="#c9c1fd"
                        minimumTrackTintColor="#8A94F0"
                        maximumValue={100}
                        minimumValue={0}
                        step={.5}
                        value={sliderValue}
                        onValueChange={setSliderValue}
                    />
                </View>

                <TouchableOpacity
                    disabled={defaultSliderValue == sliderValue}
                    onPress={handleSaveChanges}
                    style={[styles.saveChangesBtn, defaultSliderValue != sliderValue ? styles.saveChangesBtnEnabled : styles.saveChangesBtnDisabled]}
                >
                    <Text style={styles.saveChangesBtnText}>Salvar alteração</Text>
                </TouchableOpacity>

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
    },
    sliderContainer: {
        backgroundColor: 'white',
        margin: 'auto',
        width: wp('90%'),
        paddingVertical: wp('5%'),
        alignSelf: 'center'
    },
    sliderContainerTitle: {
        fontSize: RFPercentage(2.5),
        color: '#6951FF',
        fontWeight: 'bold'
    },
    sliderValue: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: RFPercentage(2.5),
    },
    saveChangesBtn: {
        backgroundColor: 'white',
        width: wp('40%'),
        alignItems: 'center',
        alignSelf: 'center',
        padding: 8,
        marginBottom: 20,
        borderRadius: 5,
    },
    saveChangesBtnEnabled: {
        backgroundColor: '#6951FF'
    },
    saveChangesBtnDisabled: {
        backgroundColor: '#646464'
    },
    saveChangesBtnText: {
        fontSize: RFPercentage(2.5),
        color: 'white',
        fontWeight: 'bold'
    }
});
