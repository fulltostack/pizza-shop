import { UPDATE_FORM_DATA, RESET_FORM_DATA } from './actions/action-types';

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

    default:
      return state;
  }
}
