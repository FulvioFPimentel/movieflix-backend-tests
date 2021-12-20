import React, { useEffect, useState } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { getDetailMovie, getReviewsData, postMovieReviews } from '../../services';
import { isAllowedByRole } from '../../services/auth';
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
    const [ addRevies, setAddRevies ] = useState({
        text: ""
    });
    const [ loading, setLoading] = useState(false);
    const [ accessReviews, setAccessReviews ] = useState(false);
  
   async function accessReviewsAuthority() {
       const accessByRole = await isAllowedByRole(['ROLE_MEMBER'])
       setAccessReviews(accessByRole);
   }
    
    async function loadMovieData() {
        setLoading(true)
        const res = await getDetailMovie(id);
        loadReviewsData();
        serMovie(res.data)
        setLoading(false)
    }

    async function loadReviewsData() {
        const res = await getReviewsData(id);
        setReviews(res.data)
    }

    async function addMovieReviews() {

        const data = {
            ...addRevies,
            movieId: id
         }
         
        await postMovieReviews(data)
        .then(() => loadReviewsData())
        .finally(() => setAddRevies({
            text: ""
        }));
    }

    useEffect(() => {
        loadMovieData();
        accessReviewsAuthority();
    },[])

    useEffect(() => {
        reviews.reverse();
    },[loadReviewsData()])

    reviews.reverse();

    return (
        <View style={theme.movieContainer}>
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

                        {accessReviews && (

                            <View style={theme.detailCard} >
                            <View>
                                <TextInput 
                                    multiline
                                    placeholder='Deixe sua avaliação aqui'
                                    autoCapitalize="none"
                                    value={addRevies.text}
                                    style={theme.textInput}
                                    onChangeText={(event) => setAddRevies({ ...addRevies, text: event})}
                                />

                                <TouchableOpacity 
                                    style={theme.primaryButton} 
                                    activeOpacity={0.5}
                                    onPress={() => addMovieReviews()}
                                    >
                                    <View>
                                        <Text style={text.textButtonLogin}>
                                            Salvar Avaliação
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                        )}
                       
                    <View style={theme.detailCard}>

                        {reviews.map((review) => (
                            <View>
                                <View style={theme.reviewsContainer}>
                                    <Image source={require('../../assets/icon.png')} />
                                    <Text style={text.reviewsName}>{review.user.name}</Text>
                                </View>

                                <View style={theme.movieContainerReviews}>
                                    <Text style={text.movieDetailReviews}>
                                       {review.text}
                                    </Text>
                                </View>
                            </View>
                        ))}


                        
                    </View>

                </View>           
            )}  
             

 
           
        </ScrollView>
        </View>
    )
}

export default MovieDetails;