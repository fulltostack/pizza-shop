import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';

import EditPizzaPage from './pages/EditPizzaPage';

export default () => (
  <BrowserRouter>
    <Route path="/" component={EditPizzaPage} />
  </BrowserRouter>
);
