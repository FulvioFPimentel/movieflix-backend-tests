import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss'

type ParamsType = {
    moviesId: string;
}

const MovieDetails = () => {
    const { moviesId } = useParams<ParamsType>();

    console.log(moviesId)

    return (
        <div className="movie-details-container">
            <h1>Movie details</h1>
        </div>
    );
}

export default MovieDetails;