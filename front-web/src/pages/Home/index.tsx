import React from 'react';
import { ReactComponent as MainImage } from 'core/assets/images/main-image.svg';
import './styles.scss';
import Login from './components/Login';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-text">
                    <h1 className="text-title">
                        Avalie Filmes
                    </h1>
                    <p className="text-subtitle">
                        Diga o que você achou do seu filme favorito
                    </p>
                </div>
                <div className="home-image">
                    <MainImage />
                </div>
            </div>
            <div>
                <Login />
            </div>
        </div>
    );
}

export default Home;