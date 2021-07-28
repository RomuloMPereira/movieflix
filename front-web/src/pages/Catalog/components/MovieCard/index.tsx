import React from 'react';
import './styles.scss';

const MovieCard = () => {
    return (
        <div className="movie-card card-base">
            <img
                src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hpU2cHC9tk90hswCFEpf5AtbqoL.jpg"
                alt="Filme"
                className="movie-image"
            />
            <div className="movie-info">
                <h5 className="movie-title">Os Simpsons</h5>
                <h6 className="movie-year">2007</h6>
                <p className="movie-description">A família Simpsons mora na cidade de Springfield</p>
            </div>
        </div>
    );
}

export default MovieCard;