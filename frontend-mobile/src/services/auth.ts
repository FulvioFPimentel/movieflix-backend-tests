import { api, TOKEN } from "./index";
import queryString from 'query-string' 
import jwtDecode from "jwt-decode";

import AsyncStorage from '@react-native-async-storage/async-storage'
// expo install @react-native-async-storage/async-storage

interface AuthProps {
    username: string;
    password: string;
}

type authority =  'ROLE_MEMBER' | 'ROLE_VISITOR'

interface accessTokenDecoded {
        exp: number;
        user_name: string;
        authorities: authority[];
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

export async function getSessionData() {
    const sessionData = await AsyncStorage.getItem("@token") || '{}';
    return sessionData;
}

export async function getAccessTokenDecoded() {
    const sessionData = await getSessionData();

    try{
        const tokenDecoded = jwtDecode(sessionData)
        return tokenDecoded as accessTokenDecoded;
    }catch (error) {
        return {} as accessTokenDecoded;
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

export async function isAllowedByRole(accessReviews: authority[] = []){
    const { authorities } = await getAccessTokenDecoded();

    return accessReviews.some(role => authorities?.includes(role));
}

export async function doLogout() {
    try {
        AsyncStorage.removeItem("@token")
    } catch(e) {
        console.warn(e)
    }
}

