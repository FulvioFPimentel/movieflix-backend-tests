import React from 'react';
import { Movie } from '../../../../core/types/Movie';
import './styles.scss'

type Props = {
    Movie: Movie;
}

const MovieCard = ({ Movie }:Props) => (
    <div className="card-base border-radius-4 movie-card card-base-mouse-hover">
         <img src={Movie.imgUrl} alt={Movie.title} className="movie-card-image"/>
        <div className="movie-info">
            <h6 className="movie-title">
                {Movie.title}
            </h6>
            <h3 className="movie-year">{Movie.year}</h3>
            <h5 className="movie-subtitle">{Movie.subTitle}</h5>
        </div>
    </div>
)

export default MovieCard;