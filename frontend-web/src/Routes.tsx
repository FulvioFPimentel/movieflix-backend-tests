import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Movie from './pages/Movie';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/">
                <Movie />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;