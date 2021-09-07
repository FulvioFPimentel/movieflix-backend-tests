import jwtDecode from  'jwt-decode';
export const CLIENT_ID = 'dsmovieflix';
export const CLIENT_SECRET = 'dsmovieflix123';

type LoginResponse = {
access_token: string;
expires_in: number;
refresh_token: string;
scope: string;
token_type: string
userId: number;
userName: string;
}

type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER'

type AccessToken = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export const saveSessionData = (loginResponse: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}

export const getSessionData = () => {
    const sessionData = localStorage.getItem('authData') ?? '{}';
    const parsedSessionData = JSON.parse(sessionData);

    return parsedSessionData as LoginResponse;
}

// install "yarn add jwd-decode" and "yarn add @types/jwt-decode"
// Decode the accessToken...
export const getAccessTokenDecoded = () => {
    const sessionData = getSessionData();
    
    const tokenDecoded = jwtDecode(sessionData.access_token);
    return tokenDecoded as AccessToken;
}

export const isTokenValid = () => {
    const { exp } = getAccessTokenDecoded();

    return Date.now() <= exp * 1000;
}

export const isAuthenticated = () => {
    const sessionData = getSessionData();

    return sessionData.access_token && isTokenValid();
}
