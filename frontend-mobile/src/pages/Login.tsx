import React, { useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput, Linking } from 'react-native'
import { isAuthenticated, login } from '../services/auth';
import { theme, text } from '../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParam } from '../routes';
import Toast from 'react-native-tiny-toast'

type navigationScreenProp = StackNavigationProp<StackParam>;

const Login: React.FC = () => {
    const navigation = useNavigation<navigationScreenProp>();
    const [ loading, setLoading ] = useState(false);
    const [ authenticated, setAuthenticated ] = useState(false);
    const [ userInfo, setUserInfo ] = useState(
        {username: "",
        password: ""}
    );

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);

        if (result === true) {
            navigation.navigate("Movie")
        }
    }

    useEffect(() => {
        logged();
    }, [])

    async function handleLogin() {
        setLoading(true)
        await login(userInfo)
            .then(() => navigation.navigate("Movie"))
            .catch(() => Toast.show("Email ou Senha invalidos...", {
                containerStyle:{
                    backgroundColor: '#d46666',
                    borderRadius: 15,
                   },
                   textStyle:{
                    color:'#fff',
                    fontWeight: "bold"
                   },
                   imgStyle:{},
                   mask:false,
                   maskStyle:{},
                   duration: 3000,
                   animation: true,   
            }))
            .finally(() => setLoading(false))
    }

    return(
        <View style={theme.container}>
            <View style={theme.loginCard}>
                <Text style={text.loginTitle}>LOGIN</Text>
                <View style={theme.form}>
                    <TextInput  
                        placeholder="Email" 
                        autoCapitalize="none" 
                        keyboardType="email-address" 
                        style={theme.textInput}
                        value={userInfo.username}
                        onChangeText={(event) => {
                            const newUserInfo = { ...userInfo};
                            newUserInfo.username = event;
                            setUserInfo(newUserInfo);
                        }}
                    />
                    <TextInput  
                        placeholder="Senha" 
                        autoCapitalize="none" 
                        style={theme.textInputPassword}
                        value={userInfo.password}
                        secureTextEntry={true}
                        onChangeText={(event) => {
                            const newUserInfo = { ...userInfo};
                            newUserInfo.password = event;
                            setUserInfo(newUserInfo);
                        }}
                    />
                    
                        <TouchableOpacity 
                            style={theme.primaryButton} 
                            activeOpacity={0.5}
                            onPress={() => handleLogin()}
                            disabled={loading}
                            >
                                <View>
                                    {loading ?
                                         <View style={theme.loadingButtonContainer}>
                                            <Text>
                                                <ActivityIndicator size="large" color="#9E9E9E" />
                                            </Text>
                                            <Text style={theme.loadingButton}>Carregamendo... </Text>
                                        </View>
                                    : (
                                        <Text style={text.textButtonLogin}>Fazer login</Text>
                                    )}
                                </View>
                        </TouchableOpacity>
                        <View style={theme.registerContainer}>
                            <Text style={text.registerLoginText}> Ainda não tem conta? </Text> 
                            <TouchableOpacity onPress={() => Linking.canOpenURL('https://my-movieflix.netlify.app/register')}>
                                <Text style={text.registerButtonText}>Cadastre-se</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        </View>
    )
}

export default Login;