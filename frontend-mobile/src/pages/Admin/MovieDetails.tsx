import React, { useEffect, useState } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { getDetailMovie, getReviewsData } from '../../services';
import { theme, text } from '../../styles';
import { MoviesData } from './Movie';

interface userData {
    id: number,
    name: string,
    roles: roleData,
}

interface roleData {
    id: number,
    authority: string
}

interface reviewsData {
    id: number,
    user: userData,
    text: string
}

interface movieData {
    id: number,
    title: string,
    subTitle: string,
    year: number,
    imgUrl: string,
    synopsis: string,
    reviews: [{
        id: number,
        name: userData,
        text: string
    }],

}

const MovieDetails: React.FC<MoviesData> = ({ route: {params: { id }}}) => {

    const [ movie, serMovie ] = useState<movieData>();
    const [ reviews, setReviews ] = useState<reviewsData[]>([]);
    const [ loading, setLoading] = useState(false);

    async function loadMovieData() {
        setLoading(true)
        const res = await getDetailMovie(id);
        serMovie(res.data);
        setLoading(false)
    }

    async function loadReviewsData() {
        const res = await getReviewsData(id);
        setReviews(res.data)
    }

    useEffect(() => {
        loadMovieData();
        loadReviewsData();
    },[])

    return (

        <ScrollView>


            {loading ? (
                <ActivityIndicator size="large" color="#9E9E9E" style={theme.movieLoading} />
            ) : (
                <View style={theme.detailsContainer}>
                    <View style={theme.detailCard}>
                        <View style={theme.movieImageContainer}>
                            <Image source={{uri: movie?.imgUrl}} style={theme.movieImage}/>
                        </View>
                        <Text style={text.movieDetailTitle}>
                            {movie?.title}
                        </Text>
                        <Text style={text.movieDetailYear}>
                            {movie?.year}
                        </Text>
                        <Text style={text.movieDetailSubTitle}>
                            {movie?.subTitle}
                        </Text>
                        <View style={theme.movieContainerSynopsis}>
                            <Text style={text.movieDetailSynopsis}>
                                {movie?.synopsis}
                            </Text>
                        </View>
                    </View> 

                    <View style={theme.detailCard}>
                        <View>
                            <TextInput 
                                placeholder='Deixe sua avaliação aqui'
                                autoCapitalize="none"
                                style={theme.textInput}/>

                            <TouchableOpacity 
                                style={theme.primaryButton} 
                                activeOpacity={0.5}>
                                <View>
                                    <Text style={text.textButtonLogin}>
                                        Salvar Avaliação
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View style={theme.detailCard}>
                        <Text>Comentarios</Text>
                    </View>

                </View>           
            )}  
             

 
           
        </ScrollView>
    )
}

export default MovieDetails;