import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { BASE_ROUTE, EDIT_PIZZA_ROUTE } from '../constants/routes';
import EditPizza from '../modules/EditPizza';

export default (
  <BrowserRouter>
    <div>
      <Route path={EDIT_PIZZA_ROUTE} exact component={EditPizza} />
      <Redirect from={BASE_ROUTE} to={EDIT_PIZZA_ROUTE} />
    </div>
  </BrowserRouter>
);
