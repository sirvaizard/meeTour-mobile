import React, {useContext, useState} from 'react';
import { StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import { useForm, Controller } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from '../components/Logo';
import api from "../services/api";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../components/CredentialsContext';

export default function Login({ navigation }: { navigation: any }) {

    //useForm 
    const { handleSubmit, control, formState: { errors } } = useForm({mode: 'onBlur'});

    //persist login
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

    //feedback message
    const [message, setMessage] = useState<String | null>(null);

    function handleSignInBtn() {
        navigation.navigate('SignIn');
    }

    function persistLogin(credentials: any){

        // to do: handle the errors in a better way
        AsyncStorage.setItem('meeTourCredentials', JSON.stringify(credentials))
            .then(() => {
                setStoredCredentials(credentials);
            })
            .catch(err => console.log(err));

    }

    async function onSubmit(data: { email: string, password: string }) {

        setMessage(null);
        
        await api.post("/token", 
            {
                email: data.email,
                password: data.password 
            }
        )
        .then(response => {
            persistLogin(response.data);
            navigation.navigate('BottomTabNav');
        })
        .catch(err => {
            console.log(err);
            setMessage("Email e/ou senha inválidos")
        })

    }

    return (
        <View style={styles.container}>

            <Logo />

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

            {message !== null && <Text style={styles.error}>{message}</Text>}

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
    label: {
        marginLeft: 10,
        marginTop: 30,
        marginBottom: 10,
        fontStyle: 'italic',
        color: '#181818'
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
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 1,
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
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 1,
        height: 40,
        padding: 10,
        borderRadius: 8,
        marginVertical: 8
    }

});