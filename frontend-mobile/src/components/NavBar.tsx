import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import { nav, text } from '../styles'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { doLogout, isAuthenticated } from '../services/auth';
import { StackParam } from '../routes';
import { StackNavigationProp } from '@react-navigation/stack';

type navigationScreenProp = StackNavigationProp<StackParam>;

const NavBar: React.FC<StackParam> = () => {
    const navigation = useNavigation<navigationScreenProp>();
    const [ authenticated, setAuthenticated ] = useState(false);

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    useEffect(() => {
        logged();
    },[])

    const handleLogout = () => {
        setAuthenticated(false)
        doLogout();
        navigation.navigate("Login")
        
    }

    return (
        
        <View>
            {authenticated ? (
                <TouchableOpacity activeOpacity={0.5} style={nav.drawer} onPress={() => handleLogout()}>
                    <Text style={text.buttonLogoutText}>
                        Sair
                    </Text>
                </TouchableOpacity>
            ) : null
            }

        </View>


    )
}

export default NavBar;

