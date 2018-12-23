import React from 'react';
import { Route, Redirect, Router } from 'react-router-dom';
import { BASE_ROUTE, EDIT_PIZZA_ROUTE, CART_ROUTE } from '../constants/routes';
import EditPizza from '../modules/EditPizza';
import Cart from '../modules/Cart';

import history from './history';
import AppHeader from '../components/AppHeader';

export default (
  <Router history={history}>
    <div>
      <AppHeader push={history.push} />
      <Route path={EDIT_PIZZA_ROUTE} exact component={EditPizza} />
      <Route path={CART_ROUTE} exact component={Cart} />
      <Redirect from={BASE_ROUTE} to={EDIT_PIZZA_ROUTE} />
    </div>
  </Router>
);
