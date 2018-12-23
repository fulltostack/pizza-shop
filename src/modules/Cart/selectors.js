import { createSelector } from 'reselect';

export const getCart = state => state.cart;

export const getCartItems = createSelector(
  getCart,
  substate => substate.items,
);
