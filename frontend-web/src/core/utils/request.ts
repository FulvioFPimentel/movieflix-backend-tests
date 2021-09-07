import axios, { Method } from 'axios';
// import qs from 'qs';
import { CLIENT_ID, CLIENT_SECRET, getSessionData } from './auth';
import history from './history'

type requestParams = {
    method?: Method;
    url: string;
    data?: object | string;
    params?: object;
    headers?:object;
}

type LoginData = {
    username: string;
    password: string;
}

const BASE_URL = 'http://localhost:8080';

axios.interceptors.response.use(function (response){
    return response;
}, function (error) {
    if (error.response.status === 401) {
        history.push('/login')
    }
    return Promise.reject(error);
})

export const makeRequest = ({ method = 'GET', url, data, params, headers }: requestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params,
        headers,
    });
}

export const makePrivateRequest = ({ method = 'GET', url, data, params}: requestParams) => {
    const sessionData = getSessionData();

    const headers = {
        'Authorization': `Bearer ${sessionData.access_token}`
    }
    
    return makeRequest({ method, url, data, params, headers})
}

export const makeLogin = (loginData: LoginData) => {
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

    // Cabeçalho 
    const headers = {
        Authorization: `Basic ${window.btoa(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
   // const payload = qs.stringify({ ...loginData, grant_type: 'password' })

    // Corpo
    const payload = `username=${loginData.username}&password=${loginData.password}&grant_type=password`

    return makeRequest({url: '/oauth/token', data: payload, method: 'POST', headers });
}
