import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search';
import Product from './pages/Product';

const path = window.location.hostname !== 'localhost' ?
    '/ReactClass/' : '/'

const Routes = () => (
    <Switch>
        <Route exact path={path} component={Search} />
        <Route exact path='/product/:id' component={Product} />
        <Route component={
            () => (
                <div>Page not found</div>
            )
        } />
    </Switch>
);

export default Routes;