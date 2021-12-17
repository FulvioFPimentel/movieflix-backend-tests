import { api, TOKEN } from "./index";
import queryString from 'query-string' 

import AsyncStorage from '@react-native-async-storage/async-storage'
// expo install @react-native-async-storage/async-storage

interface AuthProps {
    username: string;
    password: string;
}

export async function login(userInfo: AuthProps) {

    const data = queryString.stringify({ ...userInfo, grant_type: "password"})   
    
    const result = await api.post('oauth/token', data, {
        headers: {
            Authorization: TOKEN,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        
    });


    const { access_token } = result.data;
    setAsyncKeys("@token", access_token)
 
    return result;
}

async function setAsyncKeys(key: string, value: string){
    try{
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.warn(e)
    }
}  

export async function isAuthenticated() {
    try{
        const token = await AsyncStorage.getItem("@token")

        return token ? true : false;
    } catch (e) {
        console.warn(e)
    }
}

export async function doLogout() {
    try {
        AsyncStorage.removeItem("@token")
    } catch(e) {
        console.warn(e)
    }
}

