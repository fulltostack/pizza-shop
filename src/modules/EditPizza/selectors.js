import { createSelector } from 'reselect';

export const getPizzaEditForm = state => state.editPizza;

export const getSelectedSize = createSelector(
  getPizzaEditForm,
  substate => substate.size,
);

export const getSelectedToppings = createSelector(
  getPizzaEditForm,
  substate => substate.selectedToppings,
);

export const getMaxToppings = createSelector(
  getPizzaEditForm,
  substate => substate.maxToppings,
);

export const getBasePrice = createSelector(
  getPizzaEditForm,
  substate => substate.basePrice,
);
