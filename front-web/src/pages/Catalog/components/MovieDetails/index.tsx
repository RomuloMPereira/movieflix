import React from 'react';
import { ReactComponent as StarIcon } from 'core/assets/images/star.svg';
import './styles.scss';

const MovieDetails = () => {

    return (
        <div className="movie-details-container">
            <div className="movie-details-info-container card-base">
                <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg" alt="" className="movie-details-img" />
                <div className="movie-details-info">
                    <h2 className="movie-details-title">Cruela</h2>
                    <h3 className="movie-details-year">2021</h3>
                    <h4 className="movie-details-subtitle">Subtítulo</h4>
                    <div className="movie-details-sinopse-container">
                        <p className="movie-details-sinopse">
                            Na Londres dos anos 70 em meio à revolução do punk rock, Estella,
                            uma garota inteligente e criativa determinada a fazer um nome para si
                            através de seus designs. Ela faz amizade com uma dupla de jovens ladrões e,
                            juntos, constroem uma vida para si nas ruas de Londres. Um dia,
                            o talento de Estella para a moda chama a atenção da Baronesa Von Hellman,
                            uma lenda fashion que é devastadoramente chique e assustadora.
                            Mas o relacionamento delas desencadeia um curso de eventos e revelações
                            que farão com que Estella abrace seu lado rebelde e se torne a Cruella má,
                            elegante e voltada para a vingança.
                        </p>
                    </div>
                </div>
            </div>
            <div className="movie-details-form card-base">
                <textarea
                    className="movie-details-input form-control"
                    cols={30}
                    rows={10}
                />
                <button className="movie-details-btn btn btn-primary">SALVAR AVALIAÇÃO</button>
            </div>
            <div className="movie-details-rewiews-container card-base">
                <div className="movie-details-review-container">
                    <div className="movie-details-review-user">
                        <StarIcon />
                        <h3 className="movie-details-review-username">Bob Green</h3>
                    </div>
                    <div className="movie-details-review">
                        <p className="movie-details-review-text">Comentário</p>
                    </div>
                </div>
                <div className="movie-details-review-container">
                    <div className="movie-details-review-user">
                        <StarIcon />
                        <h3 className="movie-details-review-username">Bob Green</h3>
                    </div>
                    <div className="movie-details-review">
                        <p className="movie-details-review-text">Comentário</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;