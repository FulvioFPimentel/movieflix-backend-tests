import React from 'react';
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Auth from './pages/Auth';
import Movie from './pages/Movie';
import MovieDetails from './pages/Movie/components/MovieDetails';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Redirect path="/" to="/login" exact/>
            <Route path="/login">
                <Auth />
            </Route>
            <Route path="/movies" exact>
                <Movie />
            </Route>
            <Route path="/movies/:moviesId">
                <MovieDetails />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;