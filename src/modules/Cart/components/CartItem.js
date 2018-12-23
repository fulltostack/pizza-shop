import React from 'react';
import styled from 'styled-components';
import join from 'lodash/join';
import map from 'lodash/map';

import Button from '../../../components/Button';

const CartItemWrapper = styled.div`
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartItems = ({ selectedToppings, orderTotal, pizzaName, removeCartItem }) => {
  const addonsLabel = join(map(selectedToppings, ({ name }) => name), ', ');
  return (
    <CartItemWrapper>
      <div>
        {pizzaName} - ({addonsLabel})
      </div>
      ${orderTotal}
      <Button onClick={removeCartItem}>Remove Pizza</Button>
    </CartItemWrapper>
  );
};

export default CartItems;
