import { StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
import React from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        marginBottom: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoTitle: {
        fontSize: RFPercentage(3.5),
        color: '#6951FF',
        fontWeight: 'bold',
    },
});

export default function Header({title} : {title?: string}) {

    return (
        <>
           <View style={styles.header}>
                <Text style={styles.logoTitle}>{title ? title : "MeeTour"}</Text>
            </View>
        </>
    )
}

