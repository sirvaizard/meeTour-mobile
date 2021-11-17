import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageProps, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';

//como estava antes, mostrar o q foi feito hj, o que falta fazer, roteiro do pitch 

const eventos = [

    // {
    //     name: 'O Legado de Giorgio Morandi',
    //     location: 'CCBB',
    //     address: 'Rua Álvares Penteado, 112',
    //     date: '20 nov',
    //     distance: '12,5 km',
    //     image: 'https://lh3.googleusercontent.com/b2AEctDkcJdDyIVAcydJtaqeugxZ2CUcvi46BOwEgNLXZuDqdSCEVxq8lp_Lm2aD',
    //     description: 'Giorgio Morandi se dedicou intensamente na pintura de naturezas-mortas, especialmente de conjuntos de garrafas',
    //     confirmed: 6
    //   },
    //   {
    //     name: 'Geraldo de Barros',
    //     location: 'Itaú Cultural',
    //     address: 'Avenida Paulista, 149',
    //     date: '06 nov',
    //     distance: '8,3 km',
    //     image: 'https://vejasp.abril.com.br/wp-content/uploads/2016/11/22384_itau-cultural-edouard-fraipont.jpeg?quality=70&strip=info&w=800',
    //     description: 'Mais de 400 itens relacionados ao artista paulista Geraldo de Barros (1923-1988) foram reunidos em mostra inédita do Itaú Cultural.',
    //     confirmed: 6
    //   },
    //   {
    //     name: 'HYOGO EXPERIENCE',
    //     location: 'Japan House',
    //     address: 'Av. Paulista, 52',
    //     date: '05 nov',
    //     distance: '20 km',
    //     image: 'https://www.japanhousesp.com.br/sites/japanhouse.com.saopaulo/files/2021-10/Hyogo%20Experience2.jpg',
    //     description: 'Neste evento, serão apresentados os atrativos de Tajima, região de origem do Asakura Sansho - uma pimenta aromática japonesa - o local de produção e curiosidades do tempero - como e onde é possível degustar a iguaria no Brasil.',
    //     confirmed: 6
    //   },
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
    //   {
    //     name: 'Jovens Solistas',
    //     location: 'TMSP',
    //     address: 'Praça Ramos de Azevedo',
    //     date: '7 nov',
    //     distance: '12 km',
    //     image: 'https://www.infoescola.com/wp-content/uploads/2011/12/teatro-municipal-de-s%C3%A3o-paulo_460468993.jpg',
    //     description: 'Orquestra Experimental de Repertório apresenta Concerto Encerramento Jovens Solistas',
    //     confirmed: 6
    //   },
    //   {
    //     name: 'Visita ao Mirante Sesc SP',
    //     location: 'Avenida Paulista, 119',
    //     address: 'Av. Sé, 500',
    //     date: '07 nov',
    //     distance: '8 km',
    //     image: 'https://coisosonthego.com/wp-content/uploads/2018/05/O-SESC-Avenida-Paulista-e-seus-vizinhos-Ita%C3%BA-Cultural-e-Casa-das-Rosas.jpg',
    //     description: 'Visita ao mirante do SESC SP, grande oportunidade de uma visão mais abrangente da nossa cidade.',
    //     confirmed: 6
    //   },
    //   {
    //     name: 'CURIOSIDADES SOBRE O EDIFÍCIO MARTINELLI',
    //     location: 'Edifício Martinelli',
    //     address: 'Avenida São João, 35',
    //     date: '01 fev',
    //     distance: '1 km',
    //     image: 'https://i1.wp.com/www.prediomartinelli.com.br/wp-content/uploads/2019/11/slideshow-predio-martinelli.jpg',
    //     description: `Idealizado e projetado pelo italiano Giuseppe Martinelli, marcado por uma transição da era dos arranha-céus da capital na década de 1920 e um marco da arquitetura paulistana.
    //     O Edifício Martinelli localizado entre as ruas São Bento, São João e Líbero Badaró, é atualmente um dos principais símbolos arquitetônicos do Brasil.
    //     Já foi ponto de encontro da alta sociedade paulistana. Por lá já passaram estabelecimentos como o Cine Rosário e o luxuoso Hotel São Bento, além de barbearias, lojas e até uma igreja.
        
    //     Quer saber mais sobre a história desse ícone de São Paulo?! Acompanhe!`,
    //     confirmed: 6
    //   },
    //   {
    //     name: 'Exposição Tinha que ser',
    //     location: 'Centro Cultural São Paulo',
    //     address: 'Rua Vergueiro, 1000',
    //     date: '07 nov',
    //     distance: '17,7 km',
    //     image: 'http://centrocultural.sp.gov.br/wp-content/uploads/2021/11/post-tinha-que-ser-1160x653.jpg',
    //     description: 'No mês de novembro, o Centro Cultural São Paulo recebe a Mostra Tinha que ser, da artista Mabelle Collage. Com trabalhos inéditos, a mostra apresenta 6 painéis em lambe-lambe espalhados pelos espaços do CCSP. Utilizando apenas duas imagens sobrepostas, a artista apresenta o seu trabalho de forma leve, no qual o contraste visual confronta também a realidade.',
    //     confirmed: 6
    //   },

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
