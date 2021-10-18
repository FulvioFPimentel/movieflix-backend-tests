import { Movie, Review} from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg'
import './styles.scss'
import MovieReviews from '../MovieReviews';
import InsertReviews from '../MovieReviews/InsertReviews';
import { isAllowedByRole } from 'core/utils/auth';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
    const { movieId } = useParams<ParamsType>();
    const [ moviesResponse, setMoviesResponse] = useState<Movie>();
    const [ reviewsResponse, setReviewsResponse ] = useState<Review>();
    
    const getReviews = useCallback(() => {
        makePrivateRequest({ url: `/movies/${movieId}/reviews` })
        .then(response => setReviewsResponse(response.data))
    },[movieId])

   useEffect(() => {
        makePrivateRequest({ url: `/movies/${movieId}` })
        .then(response => setMoviesResponse(response.data));
   }, [movieId]);

   useEffect(() => {
    getReviews();
    }, [getReviews])

    const insertReview = (data: string) => {
        const payload = {
            movieId,
            text: data  
        }

    makePrivateRequest({ url: '/reviews', method:'POST', data: payload })
        .then(() => {
            getReviews();
        })
    }   

    return (
        <div className="movie-details-container">
            <div className="card-base border-radius-4 movie-details">
                <Link to='/movies' className="movie-details-goback">
                    <ArrowIcon className="icon-goback mouse-hover" />
                </Link>

                <div className="row">
                    <div className="col-6 pe-5">
                        <div className="movie-details-card text-center">
                            <img src={moviesResponse?.imgUrl} alt={moviesResponse?.title} className="movie-details-image" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="movie-details-card">
                            <h1 className="movie-description-title">{moviesResponse?.title}</h1>
                            <h3 className="movie-description-year">{moviesResponse?.year}</h3>
                            <h3 className="movie-description-subtitle">
                                 {moviesResponse?.subTitle}
                            </h3>
                            <p className="movie-description-text">
                                {moviesResponse?.synopsis}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {isAllowedByRole(['ROLE_MEMBER']) && (
                <InsertReviews insertReview={insertReview} />
            )}

        {moviesResponse && (
            <div className="card-base card-container-reviews">
                <MovieReviews reviews={reviewsResponse} />
            </div> 
        )}

               
        </div>
    );
}

export default MovieDetails;