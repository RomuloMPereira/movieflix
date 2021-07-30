import MovieFilter from 'core/components/MovieFilter';
import Pagination from 'core/components/Pagination';
import { Genre, MoviesResponse } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import MovieCard from './components/MovieCard';
import './styles.scss';

const Catalog = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [activePage, setActivePage] = useState(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [genre, setGenre] = useState<Genre>();

    const getMovies = useCallback(() => {
        const params = {
            page: activePage,
            genreId: genre?.id
        }

        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [activePage, genre]);

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    const handleChangeGenre = (genre: Genre) => {
        setActivePage(0);
        setGenre(genre);
    }

    return (
        <div className="catalog-container">
            <MovieFilter
                genre={genre}
                handleChangeGenre={handleChangeGenre}
            />
            <div className="catalog-movies">
                {isLoading ? <MovieCardLoader /> : (
                    moviesResponse?.content.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} key={movie.id} />
                        </Link>
                    ))
                )}
            </div>
            {moviesResponse && (
                <div className="pagination-container">
                    <Pagination
                        totalPages={moviesResponse.totalPages}
                        activePage={activePage}
                        onChange={page => setActivePage(page)}
                    />
                </div>
            )}
        </div>
    );
}

export default Catalog;