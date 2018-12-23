import React from 'react';
import styled from 'styled-components';
import { CART_ROUTE, EDIT_PIZZA_ROUTE } from '../constants/routes'

import Button from './Button';

const AppHeaderWrapper = styled.header`
  background-color: black;
  height: 60px;
  padding: 10px 30px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavButton = styled(Button)`
  margin: auto 10px;
`;

const AppHeader = ({ push }) => (
  <AppHeaderWrapper>
    <NavButton onClick={() => push(EDIT_PIZZA_ROUTE)}>Add Pizza</NavButton>
    <NavButton onClick={() => push(CART_ROUTE)}>Cart</NavButton>
  </AppHeaderWrapper>
);

export default AppHeader;
