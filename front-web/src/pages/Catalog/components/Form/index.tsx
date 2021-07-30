import history from 'core/utils/history';
import { makePrivateRequest } from 'core/utils/request';
import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.scss';

type FormState = {
    text: string;
    movieId: number;
}

type Props = {
    movieId?: number;
}

const Form = ({ movieId }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormState>();


    const onSubmit = (data: FormState) => {
        const payload = {
            ...data,
            movieId: movieId
        }

        makePrivateRequest({
            url: '/reviews',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Comentário salvo com sucesso!');
                history.push(`/movies/${movieId}`)
            })
            .catch(() => {
                console.log('Erro ao salvar comentário!');
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="movie-details-form card-base">
                <textarea
                    {...register('text', { required: "Campo obrigatório" })}
                    className="movie-details-input form-control"
                    cols={30}
                    rows={10}
                />
                {errors.text && (
                    <div className="invalid-feedback d-block">
                        {errors.text.message}
                    </div>
                )}
                <button className="movie-details-btn btn btn-primary">SALVAR AVALIAÇÃO</button>
            </div>
        </form>

    );
}

export default Form;