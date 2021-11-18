import React, {useContext} from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageProps, ScrollView } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from '../components/Themed';
import EventCard from '../components/EventCard';
import { RFPercentage } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from '../components/CredentialsContext';

import masp from '../assets/images/mask.png'
import mercadola from '../assets/images/mercadola.jpg'
import lugar from '../assets/images/lugar.jpg'


interface Event {
    name: string,
    location: string,
    address: string,
    date: string,
    distance: string,
    image: string,
    description: string,
    confirmed: number // tem q trocar isso depois pra um obj/array com todos os confirmados
}

const events: Event[] = [

    {
        name: 'O Legado de Giorgio Morandi',
        location: 'CCBB',
        address: 'Rua Álvares Penteado, 112',
        date: '20 nov',
        distance: '12,5 km',
        image: 'https://lh3.googleusercontent.com/b2AEctDkcJdDyIVAcydJtaqeugxZ2CUcvi46BOwEgNLXZuDqdSCEVxq8lp_Lm2aD',
        description: 'Giorgio Morandi se dedicou intensamente na pintura de naturezas-mortas, especialmente de conjuntos de garrafas',
        confirmed: 6
      },
      {
        name: 'Geraldo de Barros',
        location: 'Itaú Cultural',
        address: 'Avenida Paulista, 149',
        date: '06 nov',
        distance: '8,3 km',
        image: 'https://vejasp.abril.com.br/wp-content/uploads/2016/11/22384_itau-cultural-edouard-fraipont.jpeg?quality=70&strip=info&w=800',
        description: 'Mais de 400 itens relacionados ao artista paulista Geraldo de Barros (1923-1988) foram reunidos em mostra inédita do Itaú Cultural.',
        confirmed: 6
      },
      {
        name: 'HYOGO EXPERIENCE',
        location: 'Japan House',
        address: 'Av. Paulista, 52',
        date: '05 nov',
        distance: '20 km',
        image: 'https://www.japanhousesp.com.br/sites/japanhouse.com.saopaulo/files/2021-10/Hyogo%20Experience2.jpg',
        description: 'Neste evento, serão apresentados os atrativos de Tajima, região de origem do Asakura Sansho - uma pimenta aromática japonesa - o local de produção e curiosidades do tempero - como e onde é possível degustar a iguaria no Brasil.',
        confirmed: 6
      },
      {
        name: 'Sessão Cidadã - Olhar o céu de São Paulo outra vez',
        location: 'Planetário Ibirapuera',
        address: 'Av. Pedro Álvares Cabral, s/n - Portão 10',
        date: '05 nov',
        distance: '5,0 km',
        image: 'https://f.i.uol.com.br/fotografia/2018/07/20/15321024685b520744e70b6_1532102468_3x2_rt.jpg',
        description: `“Olhar o céu de São Paulo outra vez” é a atração de reabertura do Planetário Ibirapuera, que está de portas abertas novamente, com entrada gratuita.
      
        Presente na memória de muitos paulistanos, esta sessão destaca o céu de São Paulo, que há muito não se vê por causa da poluição luminosa e crescimento desenfreado da cidade. O público poderá conhecer este lugar icônico - e que ainda hoje encanta gerações - e que foi o primeiro Planetário construído no Brasil, em 1957.
        
        As sessões são recomendadas para o público geral a partir de 5 anos, porém, é livre para todos os públicos.`,
        confirmed: 6
      },
      {
        name: 'Jovens Solistas',
        location: 'TMSP',
        address: 'Praça Ramos de Azevedo',
        date: '7 nov',
        distance: '12 km',
        image: 'https://www.infoescola.com/wp-content/uploads/2011/12/teatro-municipal-de-s%C3%A3o-paulo_460468993.jpg',
        description: 'Orquestra Experimental de Repertório apresenta Concerto Encerramento Jovens Solistas',
        confirmed: 6
      },
      {
        name: 'Visita ao Mirante Sesc SP',
        location: 'Avenida Paulista, 119',
        address: 'Av. Sé, 500',
        date: '07 nov',
        distance: '8 km',
        image: 'https://coisosonthego.com/wp-content/uploads/2018/05/O-SESC-Avenida-Paulista-e-seus-vizinhos-Ita%C3%BA-Cultural-e-Casa-das-Rosas.jpg',
        description: 'Visita ao mirante do SESC SP, grande oportunidade de uma visão mais abrangente da nossa cidade.',
        confirmed: 6
      },
      {
        name: 'CURIOSIDADES SOBRE O EDIFÍCIO MARTINELLI',
        location: 'Edifício Martinelli',
        address: 'Avenida São João, 35',
        date: '01 fev',
        distance: '1 km',
        image: 'https://i1.wp.com/www.prediomartinelli.com.br/wp-content/uploads/2019/11/slideshow-predio-martinelli.jpg',
        description: `Idealizado e projetado pelo italiano Giuseppe Martinelli, marcado por uma transição da era dos arranha-céus da capital na década de 1920 e um marco da arquitetura paulistana.
        O Edifício Martinelli localizado entre as ruas São Bento, São João e Líbero Badaró, é atualmente um dos principais símbolos arquitetônicos do Brasil.
        Já foi ponto de encontro da alta sociedade paulistana. Por lá já passaram estabelecimentos como o Cine Rosário e o luxuoso Hotel São Bento, além de barbearias, lojas e até uma igreja.
        
        Quer saber mais sobre a história desse ícone de São Paulo?! Acompanhe!`,
        confirmed: 6
      },
      {
        name: 'Exposição Tinha que ser',
        location: 'Centro Cultural São Paulo',
        address: 'Rua Vergueiro, 1000',
        date: '07 nov',
        distance: '17,7 km',
        image: 'http://centrocultural.sp.gov.br/wp-content/uploads/2021/11/post-tinha-que-ser-1160x653.jpg',
        description: 'No mês de novembro, o Centro Cultural São Paulo recebe a Mostra Tinha que ser, da artista Mabelle Collage. Com trabalhos inéditos, a mostra apresenta 6 painéis em lambe-lambe espalhados pelos espaços do CCSP. Utilizando apenas duas imagens sobrepostas, a artista apresenta o seu trabalho de forma leve, no qual o contraste visual confronta também a realidade.',
        confirmed: 6
      },
]

export default function Home(props: any) {

    // const data = AsyncStorage.getItem('meeTourCredentials');
    const [currentEvent, setCurrentEvent] = React.useState<Event>(events[0])
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const {storedCredentials} = useContext(CredentialsContext);

    function handleSwitchEvent() {
        console.warn(storedCredentials);
        setCurrentEvent(events[(currentIndex + 1) % events.length])
        setCurrentIndex((currentIndex + 1) % events.length)
    }

    function handleConfirmEvent() {
        props.navigation.navigate('Event', { event: currentEvent });
    }

    return (
        <View style={styles.container}>
            
            <Header />

            <EventCard event={currentEvent} />

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={handleSwitchEvent}>
                    <AntDesign name="close" size={48} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={handleConfirmEvent}>
                    <LinearGradient
                        colors={['#6951FF', '#8A94F0']}
                        style={{
                            flex: 1,
                            position: 'absolute',
                            left: 0,
                            width: hp('18%'),
                            height: hp('18%'),
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: -hp('5%'),
                            paddingRight: hp('4%'),
                        }}
                    >
                        <Ionicons name="arrow-forward" size={48} color="white" />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        backgroundColor: '#fff',
        position: 'relative'
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: hp('12%'),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: .75,
        borderColor: '#6868683d',
        borderBottomWidth: 3,
        borderTopWidth: 0,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        width: hp('18%'),
        height: hp('18%'),
        borderRadius: hp('18%')/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rejectButton: {
        marginLeft: -hp('5%'),
        paddingLeft: hp('4%'),
        paddingTop: hp('1.1%')
    },
    acceptButton: {
        marginRight: -hp('5%'),
        paddingRight: hp('4%'),
    }
});
