import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Genre } from 'core/types/Movie';
import './styles.scss';
import { makePrivateRequest } from 'core/utils/request';

export type FilterForm = {
    genreId?: number;
}

type Props = {
    genre?: Genre;
    handleChangeGenre: (genre: Genre) => void;
}

const MovieFilter = ({ genre, handleChangeGenre }: Props) => {
    const [isLoadingGenres, setIsLoadingGenres] = useState(false);
    const [genres, setGenres] = useState<Genre[]>();

    useEffect(() => {
        setIsLoadingGenres(true);
        makePrivateRequest({ url: '/genres' })
            .then(response => {
                setGenres(response.data);
            })
            .finally(() => {
                setIsLoadingGenres(false);
                console.log(genres);
            });
    }, []);

    return (
        <div className="filter-container card-base">
            <Select
                name="genres"
                key={`select-${genre?.id}`}
                value={genre}
                options={genres}
                getOptionLabel={(option: Genre) => option.name}
                getOptionValue={(option: Genre) => String(option.id)}
                className="filter-select-container"
                classNamePrefix="movie-genres-select"
                placeholder="Gêneros"
                isLoading={isLoadingGenres}
                inputId="genres"
                onChange={value => handleChangeGenre(value as Genre)}
                isClearable
            />
        </div>
    );
}

export default MovieFilter;