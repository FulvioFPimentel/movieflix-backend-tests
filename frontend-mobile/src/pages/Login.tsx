import React, { useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { isAuthenticated, login } from '../services/auth';
import { theme, text } from '../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParam } from '../routes';

type navigationScreenProp = StackNavigationProp<StackParam>;

const Login: React.FC = () => {
    const navigation = useNavigation<navigationScreenProp>();
    const [userFetchData, setUserFetchData] = useState({});
    const [ userInfo, setUserInfo ] = useState(
        {username: "",
        password: ""}
    );

    async function handleLogin() {
        const data = await login(userInfo)
        setUserFetchData(data);
        navigation.navigate("Movie");
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
                            >
                                <View>
                                    <Text style={text.textButtonLogin}>Fazer login</Text>
                                </View>
                        </TouchableOpacity>

                    </View>
                </View>
        </View>
    )
}

export default Login;