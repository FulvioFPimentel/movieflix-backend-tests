import { Movie } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg'
import './styles.scss'

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovies] = useState<Movie>();
   useEffect(() => {
        makePrivateRequest({ url: `/movies/${movieId}` })
       .then(response => setMovies(response.data));
   }, [movieId]);

    return (
        <div className="movie-details-container">
            <div className="card-base border-radius-4 movie-details">
                <Link to="/movies" className="movie-details-goback">
                    <ArrowIcon className="icon-goback mouse-hover" />
                </Link>

                <div className="row">
                    <div className="col-6 pe-5">
                        <div className="movie-details-card text-center">
                            <img src={movie?.imgUrl} alt={movie?.title} className="movie-details-image" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="movie-details-card">
                            <h1 className="movie-description-title">{movie?.title}</h1>
                            <h3 className="movie-description-year">{movie?.year}</h3>
                            <h3 className="movie-description-subtitle">
                                 {movie?.subTitle}
                            </h3>
                            <p className="movie-description-text">
                                {movie?.synopsis}
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="card-base border-radius-4 movie-evaluation">
                <input className="form-control input-base" type="text" placeholder="Deixe sua avaliação aqui"/>
                <button type="submit" className="btn btn-primary movie-evaluation-button">SALVAR AVALIAÇÃO</button>
            </div>
        </div>
    );
}

export default MovieDetails;