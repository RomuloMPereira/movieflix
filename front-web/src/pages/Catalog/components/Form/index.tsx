import React from 'react';
import './styles.scss';

const Form = () => {

    return (
        <div className="movie-details-form card-base">
            <textarea
                className="movie-details-input form-control"
                cols={30}
                rows={10}
            />
            <button className="movie-details-btn btn btn-primary">SALVAR AVALIAÇÃO</button>
        </div>
    );
}

export default Form;