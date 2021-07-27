import Button from 'core/components/Button';
import { saveSessionData } from 'core/utils/auth';
import { makeLogin } from 'core/utils/request';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './styles.scss';

type FormState = {
    username: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormState>();
    const [hasError, setHasError] = useState(false);

    const onSubmit = (data: FormState) => {
        makeLogin(data)
            .then(response => {
                setHasError(false);
                saveSessionData(response.data);
            })
            .catch(() => {
                setHasError(true);
            })
    }

    return (
        <div className="login-container">
            <h1 className="login-title">
                LOGIN
            </h1>
            {hasError && (
                <div className="alert alert-danger mt-5">
                    Usuário ou senha inválidos
                </div>
            )}
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="email"
                        className="form-control input-login"
                        placeholder="Email"
                        {...register('username', {
                            required: "Campo obrigatório",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                    />
                    {errors.username && (
                        <div className="invalid-feedback d-block">
                            {errors.username.message}
                        </div>
                    )}
                </div>
                <div>
                    <input
                        type="password"
                        className="form-control input-login"
                        placeholder="Senha"
                        {...register('password', { required: "Campo obrigatório" })}
                    />
                    {errors.password && (
                        <div className="invalid-feedback d-block">
                            {errors.password.message}
                        </div>
                    )}
                </div>

                <div className="btn-login">
                    <Button text="LOGAR" />
                </div>
            </form>
        </div>
    );
}

export default Login;