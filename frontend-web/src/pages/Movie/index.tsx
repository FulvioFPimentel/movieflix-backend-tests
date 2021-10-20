import { useEffect, useState } from 'react';
import { makePrivateRequest } from '../../core/utils/request';
import { Link } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import './styles.scss';
import { MoviesResponse } from '../../core/types/Movie';
import FilterGenre from './components/FilterGenre';
import Pagination from 'core/components/Pagination';
import MovieCardLoader from './components/Loaders/MovieCardLoader';


const Movies = () => {
    const [ moviesResponse, setMoviesResponse ] = useState<MoviesResponse>();
    const [ activePage, setActivePage ] = useState(0);
    const [ genreSelect, setGenreSelect ] = useState(0);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        const params = {
            page: activePage,
            itemsPerPage: 8,
            genreId: genreSelect
        }
        setIsLoading(true)
        makePrivateRequest({ url: '/movies', params })
        .then(response => setMoviesResponse(response.data))
        .finally(() => {
            setIsLoading(false)
        })
    }, [activePage, genreSelect]);

    const selectGenre = (value?: number) => {
            if ( value !== undefined ){
                setActivePage(0)
                setGenreSelect(value)
            } else {
                setGenreSelect(0)
            }
    }

    return (
    <div className="movie-container">
        <FilterGenre 
        onChangeGenre={value => selectGenre(value)}/>
        <div className="catalog-movies">

            {isLoading ? <MovieCardLoader /> : (
                moviesResponse?.content.map(movie => (
                    <Link className="text-link" to={`/movies/${movie.id}`} key={movie.id}>
                        <MovieCard Movie={movie} />
                    </Link>
                ))
            )}

         
            
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