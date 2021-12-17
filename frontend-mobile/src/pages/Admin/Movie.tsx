import React, { useEffect, useState } from 'react'
import {Text, View, Image, ScrollView, ImageSourcePropType, Modal, TouchableOpacity, ActivityIndicator } from 'react-native'
import MovieCard from '../../components/MovieCard'
import {getGenresData, getMovies, getMoviesToGenre } from '../../services'
import { admin, text, theme } from '../../styles'


export interface MoviesData {
    id: number,
    title: string,
    subTitle: string,
    year: number,
    imgUrl: ImageSourcePropType,
    synopsis: string,
    route: {params: {id: Number}}
    genre: GenresData,
}

export interface GenresData {
    id: number,
    name: string,
}

const Movie: React.FC<MoviesData> = () => {

    const [movies, setMovies] = useState<MoviesData[]>([]);
    const [genres, setGenres] = useState<GenresData[]>([]);
    const [pagination, setPagination] = useState();
    const [modelSelected, setModelSelected] = useState({
        id: 0,
        name: ""
    });
    const [showGenres, setShowGenres] = useState(false);
    const [loading, setLoadibg] = useState(false);

    async function fillMovies() {
        setLoadibg(true)
        const res = await getMovies();
        setMovies(res.data.content)
        setLoadibg(false)
    }

    async function fillGenres() {
        setLoadibg(true)
      const res = await getGenresData();
      setGenres(res.data)
      setLoadibg(false)
    }

    async function fillMoviesToGenre(id: number) {
        setLoadibg(true)
        const res = await getMoviesToGenre(id)
        setMovies(res.data.content)
        setLoadibg(false)
    }

    const allGenres = () => {
        fillMoviesToGenre(0);
        setModelSelected({ 
            id: 0,
            name: ""
        })
    }

    useEffect(() => {
        fillMovies();
        fillGenres();
    },[])

    return (
        <View style={theme.movieContainer}>

            <View>
                <Modal
                    visible={showGenres} 
                    animationType='fade' 
                    transparent={true} 
                    presentationStyle='overFullScreen'
                >
                    <View style={theme.modalContainer}>
                        <ScrollView contentContainerStyle={theme.modalContent}>
                            {genres.map((gen) => (
                                <TouchableOpacity 
                                    style={theme.modalItem} 
                                    key={gen.id} 
                                    onPress={() => {
                                    fillMoviesToGenre(gen.id)
                                    setModelSelected({ ...modelSelected, name: gen.name})
                                    setShowGenres(!showGenres)
                                    
                                }}>
                                    <Text style={text.modalText}>{gen.name}</Text>
                                </TouchableOpacity>
                                
                            ))}
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        <ScrollView contentContainerStyle={admin.container}>

            <View style={theme.searchCard}>
                <View style={theme.searchInput}>
                    <TouchableOpacity onPress={() => setShowGenres(!showGenres)}>
                        <Text style={modelSelected.name === "" ? 
                            {fontSize: 15, color: "#cecece" } : 
                            {fontSize: 17, color: "#ffffff"}}
                        >
                            {modelSelected.name === "" ? "Generos" : modelSelected.name}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => allGenres()}>

                        <Text style={modelSelected.name === "" ? 
                            {display: "none"} : 
                            {display: "flex",
                            width: 20,
                            height: 90,
                            marginTop: 4
                            }}
                        >
                            <Image source={require('../../assets/clear.png')} />
                        </Text>
                    </TouchableOpacity>
                    
                </View>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#9E9E9E" style={theme.movieLoading} />
            ) : (
                movies.map((movie) => (
                    <MovieCard { ...movie} key={movie.id}/>
                ))
            )}

        </ScrollView>
        </View>
    )
}

export default Movie;