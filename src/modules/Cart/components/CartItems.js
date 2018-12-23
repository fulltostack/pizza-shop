import React from 'react';
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

export default CartItems
