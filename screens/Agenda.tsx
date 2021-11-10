import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageProps, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';

import masp from '../assets/images/mask.png'
import mercadola from '../assets/images/mercadola.jpg'
import lugar from '../assets/images/lugar.jpg'

const eventos = [
    // {
    //     image: masp,
    //     name: 'Exibição X',
    //     local: 'MASP',
    //     data: '27 de Fevereiro - Faltam 4 dias',
    //     endereco: 'Av. Paulista, 1001'
    // },
    // {
    //     image: mercadola,
    //     name: 'Convenção Y',
    //     local: 'Mercadão',
    //     data: '12 de Setembro - Faltam 24 dias',
    //     endereco: 'Av. Paulista, 100'
    // },
    // {
    //     image: lugar,
    //     name: 'Evento Z',
    //     local: 'Sé',
    //     data: '02 de Dezembro - Faltam 99 dias',
    //     endereco: 'Av. Paulista, 99'
    // }

    {
        name: 'O Legado de Giorgio Morandi',
        location: 'CCBB',
        address: 'Rua Álvares Penteado, 112',
        date: '20 nov',
        distance: '12,5 km',
        image: 'https://lh3.googleusercontent.com/b2AEctDkcJdDyIVAcydJtaqeugxZ2CUcvi46BOwEgNLXZuDqdSCEVxq8lp_Lm2aD',
        description: 'Giorgio Morandi se dedicou intensamente na pintura de naturezas-mortas, especialmente de conjuntos de garrafas',
        confirmed: 15
      },
      {
        name: 'Geraldo de Barros',
        location: 'Itaú Cultural',
        address: 'Avenida Paulista, 149',
        date: '06 nov',
        distance: '8,3 km',
        image: 'https://vejasp.abril.com.br/wp-content/uploads/2016/11/22384_itau-cultural-edouard-fraipont.jpeg?quality=70&strip=info&w=800',
        description: 'Mais de 400 itens relacionados ao artista paulista Geraldo de Barros (1923-1988) foram reunidos em mostra inédita do Itaú Cultural.',
        confirmed: 21
      },
      {
        name: 'HYOGO EXPERIENCE',
        location: 'Japan House',
        address: 'Av. Paulista, 52',
        date: '05 nov',
        distance: '20 km',
        image: 'https://www.japanhousesp.com.br/sites/japanhouse.com.saopaulo/files/2021-10/Hyogo%20Experience2.jpg',
        description: 'Neste evento, serão apresentados os atrativos de Tajima, região de origem do Asakura Sansho - uma pimenta aromática japonesa - o local de produção e curiosidades do tempero - como e onde é possível degustar a iguaria no Brasil.',
        confirmed: 25
      },
]

export default function Agenda({ route, navigation }: {route: any, navigation: any}) {
   
    function handleConfirmEvent() {
        // navigation.navigate('Event', { event: eventTo });
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logoTitle}>Agenda</Text>
            </View>

            { eventos.map((evento, index) => (
                <View key={String(index)} style={styles.eventContainer}>
                     <TouchableOpacity onPress={handleConfirmEvent}>
                         <View style={styles.titleContainer}>
                             <Image source={{uri: evento.image}} style={styles.image} />
                             <View style={{width: '80%'}}>
                                 <Text style={styles.eventTitle}>{ evento.name }</Text>
                                 <Text style={styles.eventLocation}>{ evento.location }</Text>
                             </View>
                         </View>
                         <View style={styles.eventInfoContainer}>
                             <View style={styles.eventInfoItem}>
                                 <FontAwesome size={18} name="calendar" />
                                 <Text style={styles.data}>{ evento.date }</Text>
                             </View>
                             <View style={styles.eventInfoItem}>
                                 <FontAwesome size={18} name="map-marker" />
                                 <Text style={styles.endereco}>{ evento.address }</Text>
                             </View>
                         </View>
                     </TouchableOpacity>
                </View>
            ))}
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
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    logoTitle: {
        fontSize: 26,
        color: '#6951FF',
        fontWeight: 'bold',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 16
    },
    eventContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,

        marginHorizontal: 15,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    eventTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    eventLocation: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    data: {
        marginBottom: 10,
        marginLeft: 5,
    },
    endereco: {
        marginLeft: 5,
    },
    eventInfoContainer: {
        marginTop: 15
    },
    eventInfoItem: {
        flexDirection: 'row',
        alignContent: 'center',
        marginLeft: 5
    }
});
