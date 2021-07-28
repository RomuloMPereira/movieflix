import React from 'react';
import MovieCard from './components/MovieCard';
import './styles.scss';

const Catalog = () => {

    return (
        <div className="catalog-container">
            <div className="filter-container">
                <h3>Filtro</h3>
            </div>
            <div className="catalog-movies">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
            <div className="pagination-container">
                <h5>Paginação</h5>
            </div>
        </div>
    );
}

export default Catalog;