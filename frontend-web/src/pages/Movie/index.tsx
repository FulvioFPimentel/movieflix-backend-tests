import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import './styles.scss';
import { makeRequest } from '../../core/utils/request';

const Movie = () => {

    useEffect(() => {
        makeRequest({ url: '/customers' })
        .then(response => console.log(response));
    }, []);

    return (
        <div className="movie-container">
        <h1>Movie... </h1>
        <div className="catalog-movies">
            <Link className="text-link" to="/movies/1"><MovieCard /></Link>
            <Link className="text-link" to="/movies/2"><MovieCard /></Link>
            <Link className="text-link" to="/movies/3"><MovieCard /></Link>
            <Link className="text-link" to="/movies/4"><MovieCard /></Link>
            <Link className="text-link" to="/movies/5"><MovieCard /></Link>
            <Link className="text-link" to="/movies/6"><MovieCard /></Link>
            <Link className="text-link" to="/movies/7"><MovieCard /></Link>
            <Link className="text-link" to="/movies/8"><MovieCard /></Link>
            <Link className="text-link" to="/movies/9"><MovieCard /></Link>
        </div>
    </div>
    )
}
    


export default Movie;