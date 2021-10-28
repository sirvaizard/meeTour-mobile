import * as React from 'react';
import { StyleSheet, TextInput, Alert, TouchableOpacity, Image, ImageProps } from 'react-native';
import { Text, View } from '../components/Themed';
import { useForm, Controller } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from '../assets/images/logo_signin.png'

export default function Agenda({ navigation }: { navigation: any }) {

    const { register, setValue, handleSubmit, control, reset, formState: { errors: any } } = useForm();

    function handleSignInBtn(){
        navigation.navigate('SignIn');
    }

    function onSubmit(data) {
        console.log(data);
        navigation.navigate('BottomTabNav');
    }

    function onError(errors, e) {
        return console.log(errors);
    }

    return (
        <View style={styles.container}>

            <View>
                <Image source={Logo} style={styles.logo} />
            </View>

            <Text style={styles.label}>Fazer login no MeeTour</Text>

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value !== undefined ? value : ''}
                    />
                )}
                name="email"
                rules={{ required: true }}
            />

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Senha"
                        secureTextEntry={true}
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value !== undefined ? value : ''}
                    />
                )}
                name="password"
                rules={{ required: true }}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <LinearGradient
                    colors={['#6951FF', '#8A94F0']}
                    style={{
                        height: 40,
                        width: '100%',
                        position: 'absolute',
                        left: 0,
                        borderRadius: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={styles.buttonText}> Entrar </Text >
                </LinearGradient>
            </TouchableOpacity>

            <Text style={styles.label}>Primeira vez por aqui?</Text>

            <TouchableOpacity style={styles.button} onPress={handleSignInBtn}>
                <LinearGradient
                    colors={['#6951FF', '#8A94F0']}
                    style={{
                        height: 40,
                        width: '100%',
                        position: 'absolute',
                        left: 0,
                        borderRadius: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={styles.buttonText}> Fazer cadastro </Text >
                </LinearGradient>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        height: 50,
        resizeMode: 'contain',
        marginBottom: 20
    },
    label: {
        marginHorizontal: 'auto',
        marginTop: 30,
        marginBottom: 10,
        fontStyle: 'italic'
    },
    button: {
        marginTop: 8,
        color: 'white',
        height: 40,
        width: '100%',
        borderRadius: 4,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: wp('5%'),
        backgroundColor: 'white',
    },
    input: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 40,
        padding: 10,
        borderRadius: 8,
        marginVertical: 8
    },


});