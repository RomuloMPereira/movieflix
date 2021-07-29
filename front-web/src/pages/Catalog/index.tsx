import Pagination from 'core/components/Pagination';
import { MoviesResponse } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import MovieCard from './components/MovieCard';
import './styles.scss';

const Catalog = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();

    const getMovies = useCallback(() => {
        makePrivateRequest({ url: '/movies' })
            .then(response => setMoviesResponse(response.data))
    }, []);

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    return (
        <div className="catalog-container">
            <div className="filter-container">
                <h3>Filtro</h3>
            </div>
            <div className="catalog-movies">
                {moviesResponse?.content.map(movie => (
                    <MovieCard movie={movie} />
                ))}
            </div>
            <div className="pagination-container">
                <Pagination />
            </div>
        </div>
    );
}

export default Catalog;