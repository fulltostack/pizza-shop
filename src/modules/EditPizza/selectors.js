import { createSelector } from 'reselect';

export const getPizzaEditForm = state => state.editPizza;

export const getSelectedSize = createSelector(
  getPizzaEditForm,
  substate => substate.selectedSize,
);

export const getSelectedToppings = createSelector(
  getPizzaEditForm,
  substate => substate.selectedToppings,
);
