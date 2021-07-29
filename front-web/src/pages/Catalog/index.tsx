import Pagination from 'core/components/Pagination';
import { MoviesResponse } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import MovieCard from './components/MovieCard';
import './styles.scss';

const Catalog = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [activePage, setActivePage] = useState(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getMovies = useCallback(() => {
        const params = {
            page: activePage
        }

        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [activePage]);

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    return (
        <div className="catalog-container">
            <div className="filter-container">
                <h3>Filtro</h3>
            </div>
            <div className="catalog-movies">
                {isLoading ? <MovieCardLoader /> : (
                    moviesResponse?.content.map(movie => (
                        <MovieCard movie={movie} />
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