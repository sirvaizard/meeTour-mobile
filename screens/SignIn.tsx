import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageProps, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';

export default function Agenda({ route, navigation }: {route: any, navigation: any}) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logoTitle}>Perfil</Text>
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
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    logoTitle: {
        fontSize: 26,
        color: '#6951FF',
        fontWeight: 'bold',
    }
});
