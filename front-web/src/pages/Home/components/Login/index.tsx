import Button from 'core/components/Button';
import React from 'react';
import './styles.scss';

const Login = () => {
    return (
        <div className="login-container">
            <h1 className="login-title">
                LOGIN
            </h1>
            <form className="login-form">
                <input
                    type="text"
                    className="form-control input-login"
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="form-control input-login"
                    placeholder="Senha"
                />
                <div className="btn-login">
                    <Button text="LOGAR" />
                </div>
            </form>
        </div>
    );
}

export default Login;