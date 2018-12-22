import filter from 'lodash/filter';
import { UPDATE_FORM_DATA, RESET_FORM_DATA, UPDATE_TOPPINGS } from './actions/action-types';

const initialState = {
  selectedSize: undefined,
  selectedToppings: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        [action.fieldName]: action.value,
      };

    case RESET_FORM_DATA:
      return initialState;

    case UPDATE_TOPPINGS: 
      let selectedToppings = [...state.selectedToppings];
      if (!state.selectedToppings.includes(action.topping)) {
        selectedToppings.push(action.topping);
      } else {
        selectedToppings = filter(
          selectedToppings,
          topping => topping !== action.topping
        );
      }

      return {
        ...state,
        selectedToppings,
      };

    default:
      return state;
  }
}
