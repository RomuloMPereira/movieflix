import React, { useCallback, useEffect, useState } from 'react';
import { ReactComponent as StarIcon } from 'core/assets/images/star.svg';
import './styles.scss';
import Form from '../Form';
import { useParams } from 'react-router-dom';
import { Movie } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';


type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();

    const getMovie = useCallback(() => {
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
    }, [movieId]);

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    return (
        <div className="movie-details-container">
            <div className="movie-details-info-container card-base">
                <img src={movie?.imgUrl} alt={movie?.title} className="movie-details-img" />
                <div className="movie-details-info">
                    <h2 className="movie-details-title">{movie?.title}</h2>
                    <h3 className="movie-details-year">{movie?.year}</h3>
                    <h4 className="movie-details-subtitle">{movie?.subtitle}</h4>
                    <div className="movie-details-sinopse-container">
                        <p className="movie-details-sinopse">
                            {movie?.synopsis}
                        </p>
                    </div>
                </div>
            </div>
            <Form movieId={movie?.id} />
            <div className="movie-details-rewiews-container card-base">
                {movie?.reviews?.map(review => (
                    <div className="movie-details-review-container" key={review.id}>
                        <div className="movie-details-review-user">
                            <StarIcon />
                            <h3 className="movie-details-review-username">{review.user.name}</h3>
                        </div>
                        <div className="movie-details-review">
                            <p className="movie-details-review-text">{review.text}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default MovieDetails;