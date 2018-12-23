import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItems from '../components/CartItems';
import Button from '../../../components/Button';

import { emptyCart, removeCartItem } from '../actions';
import { getCartItems } from '../selectors';

const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cart = props => {
  const { cartItems, removeCartItem, emptyCart } = props;
  return (
    <CartItemsWrapper>
      <CartItems
        items={cartItems}
        removeCartItem={removeCartItem}
      />
      <Button onClick={emptyCart}>Empty Cart</Button>
    </CartItemsWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems
});

const mapDispatchToProps = dispatch => ({
  emptyCart: () => dispatch(emptyCart()),
  removeCartItem: id => dispatch(removeCartItem(id)),
});

Cart.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
