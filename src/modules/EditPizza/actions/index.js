import { UPDATE_FORM_DATA, RESET_FORM_DATA, UPDATE_TOPPINGS } from './action-types';

export const updateFormData = (fieldName, value) => ({
  type: UPDATE_FORM_DATA,
  fieldName,
  value,
});

export const resetFormData = () => ({
  type: RESET_FORM_DATA,
});

export const updateToppings = topping => ({
  type: UPDATE_TOPPINGS,
  topping,
});
