import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ReactComponent as AuthImage } from '../../core/assets/images/auth.svg'
import Login from './components/Login';
import Register from './components/Register';
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
            <Switch>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </div>
    </div>
);

export default Auth;