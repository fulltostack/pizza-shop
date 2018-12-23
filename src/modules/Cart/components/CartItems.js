import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import CartItem from './CartItem';
import Card from '../../../components/Card';

const CartItems = ({ items, removeCartItem }) => (
  <Card>
    {map(items, item => (
      <CartItem
        removeCartItem={() => removeCartItem(item.id)}
        key={item.id}
        {...item}
      />
    ))}
  </Card>
);

CartItem.propTypes = {
  items: PropTypes.array,
  removeCartItem: PropTypes.func.isRequired,
};

export default CartItems;
