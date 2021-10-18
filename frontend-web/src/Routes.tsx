import React from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Auth from './pages/Auth';
import history from './core/utils/history';
import PrivateRoute from './core/components/Navbar/Routes/PrivateRoute';
import MovieDetails from './pages/Movie/components/MovieDetails';
import Movies from './pages/Movie';

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Redirect path="/" to="/login" exact/>
            <Route path="/login" exact>
                <Auth />
            </Route>
            <Redirect path="/" to="/register" exact/>
            <Route path="/register" exact>
                <Auth />
            </Route>
            <PrivateRoute path="/movies/:movieId">                
                <MovieDetails />
            </PrivateRoute>
            <PrivateRoute path="/movies">
                <Movies />
            </PrivateRoute>
        </Switch>
    </Router>
);

export default Routes;