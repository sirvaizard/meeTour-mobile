import React, {useContext} from 'react';
import { StyleSheet, TextInput, Alert, TouchableOpacity, Image, ImageProps } from 'react-native';
import { Text, View } from '../components/Themed';
import { useForm, Controller } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from '../assets/images/logo_signin.png';
import api from "../services/api";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../components/CredentialsContext';

export default function Login({ navigation }: { navigation: any }) {

    const { handleSubmit, control, formState: { errors } } = useForm({mode: 'onBlur'});
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

    function handleSignInBtn() {
        navigation.navigate('SignIn');
    }

    function persistLogin(credentials: any){

        AsyncStorage.setItem('meeTourCredentials', JSON.stringify(credentials))
            .then(() => {
                setStoredCredentials(credentials);
            })
            .catch(err => console.log(err));

    }

    async function onSubmit(data: { email: string, password: string }) {
        
        await api.post("/token", 
            {
                email: data.email,
                password: data.password 
            }
        )
        .then(response => {
            console.log(response);
            persistLogin(response.data);
            navigation.navigate('BottomTabNav');
        })
        .catch(err => console.log(err))

        // navigation.navigate('BottomTabNav')
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
                rules={{ 
                    required: { value: true, message: "Insira um e-mail válido" },
                    minLength: {
                        value: 8,
                        message: 'Insira um e-mail válido'
                    }
                }}
            />

            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

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
                rules={{ 
                    required: { value: true, message: "Insira sua senha" },
                    minLength: {
                        value: 6,
                        message: 'Insira sua senha (mín 6 caracteres)'
                    }
                }}
            />

            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

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
        height: 45,
        width: wp('50%'),
        marginLeft: wp('20%'),
        // resizeMode: 'contain',
        marginBottom: 20
    },
    label: {
        marginLeft: 10,
        marginTop: 30,
        marginBottom: 10,
        fontStyle: 'italic'
    },
    error: {
        color: 'red'
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