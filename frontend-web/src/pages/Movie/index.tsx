import { useEffect, useState } from 'react';
import { makePrivateRequest } from '../../core/utils/request';
import { Link } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import './styles.scss';
import { MoviesResponse } from '../../core/types/Movie';
import FilterGenre from './components/FilterGenre';
import Pagination from 'core/components/Pagination';


const Movies = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            itemsPerPage: 8,
            genreId: 0
        }

        makePrivateRequest({ url: '/movies', params })
        .then(response => setMoviesResponse(response.data));
    }, [activePage]);

    return (
    <div className="movie-container">
        <FilterGenre />
        <div className="catalog-movies">

            {moviesResponse?.content.map(movie => (
                <Link className="text-link" to={`/movies/${movie.id}`} key={movie.id}>
                    <MovieCard Movie={movie} />
                </Link>
            ))}
            
        </div>
        {moviesResponse && 
            <Pagination 
                totalPages={moviesResponse.totalPages}
                onChange={page => setActivePage(page)}
            />}
    </div>
    )
}

export default Movies;