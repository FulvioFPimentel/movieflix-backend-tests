import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../../core/assets/images/arrow.svg'
import { ReactComponent as Movie } from '../../../../core/assets/images/movie.svg'
import './styles.scss'

type ParamsType = {
    moviesId: string;
}

const MovieDetails = () => {
    const { moviesId } = useParams<ParamsType>();

    console.log(moviesId)

    return (
        <div className="movie-details-container">
            <div className="card-base border-radius-4 movies-details">
                <Link to="/movies" className="movie-details-goback">
                    <ArrowIcon className="icon-goback mouse-hover" />
                </Link>

                <div className="row">
                    <div className="col-6 ">
                        <div className="movie-details-card text-center">
                            <Movie className="movies-details-image"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="movie-details-card">
                            <h1 className="movie-description-title">O Retorno do Rei</h1>
                            <h3 className="movie-description-year">2013</h3>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;