import React from 'react';
import { ReactComponent as MovieImage } from '../../../../core/assets/images/movie.svg'
import './styles.scss'

const MovieCard = () => (
    <div className="card-base border-radius-4 movie-card">
         <MovieImage />
        <div className="movie-info">
            <h6 className="movie-title">O Retorno do Rei</h6>
            <h3 className="movie-year">2013</h3>
            <h5 className="movie-subtitle">O olho do inimigo está se <br/> movendo.</h5>
        </div>
    </div>
)

export default MovieCard;