import { Movie } from 'core/types/Movie';
import React from 'react';
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
    const synopsisArray = movie.synopsis.split(' ', 15);
    const synopsis = synopsisArray.join(' ');

    return (
        <div className="movie-card card-base">
            <img
                src={movie.imgUrl}
                alt={movie.title}
                className="movie-image"
            />
            <div className="movie-info">
                <h5 className="movie-title">{movie.title}</h5>
                <h6 className="movie-year">{movie.year}</h6>
                <p className="movie-description">{synopsis}...</p>
            </div>
        </div>
    );
}

export default MovieCard;