import React from 'react';

import { ReactComponent as AuthImage } from '../../core/assets/images/auth.svg'
import Login from './components/Login';
import './styles.scss'

const Auth = () => (
    <div className="auth-container">
        <div className="auth-info">
            <h1 className="auth-info-title">
                Avalie Filmes
            </h1>
            <p className="auth-info-subtitle">
                Diga o que você achou do seu <br/> filme favorito
            </p>
            <AuthImage className="auth-image"/>
        </div>
        <div className="auth-content">
            <Login />
        </div>
    </div>
);

export default Auth;