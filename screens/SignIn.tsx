import * as React from 'react';
import { StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { useForm, Controller } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from '../assets/images/logo_signin.png';
import api from "../services/api";


export default function SignIn({ navigation }: { navigation: any }) {

    const { handleSubmit, control, formState: { errors } } = useForm();

    function handleBtnVoltar(){
        navigation.navigate('Login');
    }

    async function onSubmit(data: { name: string, email: string, cpf: string, birth: string, password: string }) {
        await api.post("/user",
            {
                name: data.name,
                email: data.email,
                cpf: data.cpf,
                birth: data.birth,
                password: data.password
            }
        )
        .then(response => { console.log(response), navigation.navigate('Login') })
        .catch(err => console.log(err))
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={styles.container}>

            <View>
                <Image source={Logo} style={styles.logo} />
            </View>

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Nome completo"
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value !== undefined ? value : ''}
                    />
                )}
                name="name"
                rules={{
                    required: { value: true, message: "Insira um email válido" },
                    minLength: {
                        value: 8,
                        message: 'Insira seu nome completo'
                    },
                    maxLength: {
                        value: 40,
                        message: 'Use no máximo 40 caracteres'
                    }
                }}
            />

            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

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
                    required: { value: true, message: "Insira um email válido" },
                    minLength: {
                        value: 8,
                        message: 'Insira um email válido'
                    },
                    maxLength: {
                        value: 40,
                        message: 'Use no máximo 40 caracteres'
                    }
                }}
            />

            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="CPF"
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value !== undefined ? value : ''}
                    />
                )}
                name="cpf"
                rules={{
                    required: { value: true, message: "Insira seu cpf sem pontos ou traços" },
                    minLength: {
                        value: 11,
                        message: 'Insira seu cpf sem pontos ou traços'
                    },
                    maxLength: {
                        value: 11,
                        message: 'Insira seu cpf sem pontos ou traços'
                    }
                }}
            />

            {errors.cpf && <Text style={styles.error}>{errors.cpf.message}</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Data de nascimento"
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value !== undefined ? value : ''}
                    />
                )}
                name="birth"
                rules={{
                    required: { value: true, message: "Insira uma data no formato dd-mm-aaaa" },
                    minLength: {
                        value: 10,
                        message: 'Insira uma data no formato dd-mm-aaaa'
                    },
                    maxLength: {
                        value: 10,
                        message: 'Insira uma data no formato dd-mm-aaaa'
                    }
                }}
            />

            {errors.birth && <Text style={styles.error}>{errors.birth.message}</Text>}

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
                    required: { value: true, message: "Insira uma senha com no mínimo 8 caracteres" },
                    minLength: {
                        value: 6,
                        message: 'Insira uma senha com no mínimo 6 caracteres'
                    }
                }}
            />

            {errors.password && <Text style={styles.error}>{errors.password?.message}</Text>}

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
                    <Text style={styles.buttonText}> Fazer Cadastro </Text >
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonVoltar} onPress={handleBtnVoltar}>
                <Text>Voltar</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    logo: {
        height: 45,
        width: wp('50%'),
        marginLeft: wp('20%'),
        // resizeMode: 'contain',
        marginTop: 20,
        marginBottom: 20
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
    buttonVoltar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        height: 40,
        width: '30%',
        marginTop: hp('5%'),
        // marginLeft: '35%',
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
        paddingTop: Constants.statusBarHeight,
        padding: wp('5%'),
        backgroundColor: 'white',
        overflow: 'hidden',
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