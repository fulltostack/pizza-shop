import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';

import CartPage from './pages/CartPage';

export default () => (
  <BrowserRouter>
    <Route path="/" component={CartPage} />
  </BrowserRouter>
);
