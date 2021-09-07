import React, { useEffect, useState } from 'react';
import { makePrivateRequest } from '../../core/utils/request';
import { Link } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import './styles.scss';
import { MoviesResponse } from '../../core/types/Movie';
import FilterGenre from './components/FilterGenre';

const Movies = () => {

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();

    console.log(moviesResponse);

    useEffect(() => {
        const params = {
            page: 0,
            itemsPerPage: 12
        }

        makePrivateRequest({ url: '/movies', params })
        .then(response => setMoviesResponse(response.data));
    }, []);

    return (
    <div className="movie-container">
        <FilterGenre />
        <div className="catalog-movies">

            {moviesResponse?.content.map(movie => (
                <Link className="text-link" to="/movies/1" key={movie.id}>
                    <MovieCard Movie={movie} />
                </Link>
            ))}
            
        </div>
    </div>
    )
}

export default Movies;