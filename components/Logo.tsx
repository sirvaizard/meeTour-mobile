import React from 'react';
import { StyleSheet, Image} from 'react-native';
import {View} from '../components/Themed';
import LogoImg from '../assets/images/logo_signin.png';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    logoContainer: {
        backgroundColor: 'white'
    },
    logo: {
        height: wp('12%'),
        width: wp('50%'),
        marginLeft: wp('20%'),
        marginBottom: 20
    },
});

export default function Logo() {

    return (
        <>
           <View style={styles.logoContainer}>
                <Image source={LogoImg} style={styles.logo} />
            </View>
        </>
    )
}
