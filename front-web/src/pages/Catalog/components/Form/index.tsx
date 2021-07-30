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
    onChange: (changed: boolean) => void
}

const Form = ({ movieId, onChange }: Props) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormState>();

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
                history.push(`/movies/${movieId}`);
                onChange(true);
            })
            .finally(() => {
                setValue('text', '');
                onChange(false);
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
                <button className="movie-details-btn btn btn-primary">
                    SALVAR AVALIAÇÃO
                </button>
            </div>
        </form>

    );
}

export default Form;