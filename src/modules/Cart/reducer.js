import filter from 'lodash/filter';
import { ADD_ITEM_TO_CART, EMPTY_CART, REMOVE_CART_ITEM } from './actions/action-types';

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [
          ...state.items,
          action.cartItem,
        ],
      };

    case EMPTY_CART:
      return initialState;

    case REMOVE_CART_ITEM: 
      return {
        ...state,
        items: filter(state.items, ({ id }) => id !== action.id),
      };

    default:
      return state;
  }
}
