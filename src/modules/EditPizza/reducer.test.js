import reducer from './reducer'
import { RESET_FORM_DATA, UPDATE_TOPPINGS, UPDATE_FORM_DATA } from './actions/action-types'

describe('Edit pizza reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: null }))
      .toEqual({
        selectedSize: undefined,
        selectedToppings: [],
      });
  });

  it('should handle RESET_FORM_DATA', () => {
    const state = { selectedSize: 8 }
    const action = { type: RESET_FORM_DATA }
    expect(
      reducer(state, action))
      .toEqual({
        selectedSize: undefined,
        selectedToppings: [],
      });
  });

  it('should handle UPDATE_TOPPINGS', () => {
    const topping = { name: 'cheese', price: 0.1, __typename: 'topping' };
    const state = { selectedToppings: [] }
    const action = { type: UPDATE_TOPPINGS, topping }
    expect(
      reducer(state, action))
      .toEqual({ "selectedToppings": [topping] });
  });

  it('should handle UPDATE_FORM_DATA', () => {
    const state = {}
    const action = { type: UPDATE_FORM_DATA, fieldName: 'size', value: 10 }
    expect(
      reducer(state, action))
      .toEqual({ size: 10 });
  });
});
