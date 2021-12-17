import React from 'react'
import { View, Text, ImageSourcePropType, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { text, theme } from '../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParam } from '../routes';
import { MoviesData } from '../pages/Admin/Movie';

type navigationScreenProp = StackNavigationProp<StackParam>;

const MovieCard: React.FC<MoviesData> = ({ id, title, subTitle, year, imgUrl, synopsis}) => {

    const navigation = useNavigation<navigationScreenProp>();
    return (
        <TouchableOpacity 
            style={theme.movieCard} 
            activeOpacity={0.8}
            onPress={() => navigation.navigate("MovieDetails", {id})}
        >
            <Image source={{ uri: `${imgUrl}`}} style={theme.movieImg}/>
            <Text style={text.movieTitle}>{title}</Text>
            <Text style={text.movieYear}>{year}</Text>
            <Text style={text.movieSubTitle}>{subTitle}</Text>
        </TouchableOpacity>
    )
}

export default MovieCard;