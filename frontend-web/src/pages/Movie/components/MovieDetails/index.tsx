import { Movie, Review} from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg'
import './styles.scss'
import MovieReviews from '../MovieReviews';
import InsertReviews from '../MovieReviews/InsertReviews';
import { isAllowedByRole } from 'core/utils/auth';
import MovieImageLoader from '../Loaders/MovieImageLoader';
import MovieDescriptionLoader from '../Loaders/MovieDescriptionLoader';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
    const { movieId } = useParams<ParamsType>();
    const [ moviesResponse, setMoviesResponse] = useState<Movie>();
    const [ reviewsResponse, setReviewsResponse ] = useState<Review>();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isLoadingReviews, setIsLoadingReviews ] = useState(false);
    
    const getReviews = useCallback(() => {
        makePrivateRequest({ url: `/movies/${movieId}/reviews` })
        .then(response => setReviewsResponse(response.data))
        .finally(() => {
            setIsLoadingReviews(false);
        })
    },[movieId])

   useEffect(() => {
        setIsLoading(true)
        setIsLoadingReviews(true)
        makePrivateRequest({ url: `/movies/${movieId}` })
        .then(response => setMoviesResponse(response.data))
        .finally(() => {
            getReviews();
            setIsLoading(false);
        })
   }, [movieId, getReviews]);

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
                    
                    <div className="movie-details-card">
                        <div className="movie-details-image">
                            {isLoading ? <MovieImageLoader /> : (
                                <img src={moviesResponse?.imgUrl} alt={moviesResponse?.title} className="movie-image" />
                            )} 
                             
                        </div>
                   
                        <div className="movie-details-info">
                            {isLoading ? <MovieDescriptionLoader /> : (
                                <>
                                    <h1 className="movie-description-title">{moviesResponse?.title}</h1>
                                    <h3 className="movie-description-year">{moviesResponse?.year}</h3>
                                    <h3 className="movie-description-subtitle">
                                        {moviesResponse?.subTitle}
                                    </h3>
                                    <p className="movie-description-text">
                                        {moviesResponse?.synopsis}
                                    </p>
                                </>
                            )}
                        
                         </div>
                    </div>
            </div>

            {isAllowedByRole(['ROLE_MEMBER']) && (
                <InsertReviews insertReview={insertReview} />
            )}

            {isLoadingReviews ? (
                <div className="card-base card-container-reviews">
                    <h6 className="user-reviews">Carregando...</h6>
                </div>

            ) : (
                <MovieReviews reviews={reviewsResponse} />
            )}

  

               
        </div>
    );
}

export default MovieDetails;