import Navbar from 'core/components/Navbar';
import history from 'core/utils/history';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import React from 'react';
import { Route, Router, Switch } from 'react-router';

const Routes = () => {

    return (
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movies" exact>
                    <Catalog />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;