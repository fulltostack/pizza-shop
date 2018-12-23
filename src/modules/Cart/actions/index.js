import { ADD_ITEM_TO_CART, EMPTY_CART, REMOVE_CART_ITEM } from './action-types';

export const addItemToCart = cartItem => ({
  type: ADD_ITEM_TO_CART,
  cartItem,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});

export const removeCartItem = id => ({
  type: REMOVE_CART_ITEM,
  id,
});
