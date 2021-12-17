import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
// axios.defaults.headers.common = {'Authorization': `bearer ${userToken() }`}

export const api = axios.create({
    baseURL: "https://fulvio-dsmovieflix.herokuapp.com"

})

export const TOKEN = 'Basic ZHNtb3ZpZWZsaXg6ZHNtb3ZpZWZsaXgxMjM=';

export async function userToken() {
    const token = await AsyncStorage.getItem("@token");
    return token;
}

export async function getMovies() {
    const token = await userToken();
    const res = api.get(
        `/movies?page=0&itemsPerPage=20&direction=ASC&orderBy=title&genreId=0`,
         { headers: {'Authorization': `bearer ${token}`}})
    return res;
}

export async function getDetailMovie(id: Number){
    const token = await userToken();
    const res = api.get(`movies/${id}`,
    { headers: {'Authorization': `bearer ${token}`}})
    return res;
}

export async function getReviewsData(id: Number){
    const token = await userToken();
    const res = api.get(`movies/${id}/reviews`,
    { headers: {'Authorization': `bearer ${token}`}})
    return res;
}

export async function getGenresData(){
    const token = await userToken();
    const res = api.get(`/genres`,
    { headers: {'Authorization': `bearer ${token}`}})
    return res;
}

export async function getMoviesToGenre(id: number) {
    const token = await userToken();
    const res = api.get(`/movies?page=0&itemsPerPage=20&direction=ASC&orderBy=title&genreId=${id}`,
    { headers: {'Authorization': `bearer ${token}`}});
    return res;
}