import React from 'react';
import PropTypes from 'prop-types';
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

const CartItem = ({ selectedToppings, orderTotal, pizzaName, removeCartItem }) => {
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

CartItem.propTypes = {
  selectedToppings: PropTypes.array,
  orderTotal: PropTypes.number,
  pizzaName: PropTypes.string,
  removeCartItem: PropTypes.func.isRequired,
};

export default CartItem;
