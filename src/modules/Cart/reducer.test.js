import reducer from './reducer'
import { ADD_ITEM_TO_CART, REMOVE_CART_ITEM, EMPTY_CART } from './actions/action-types'


const orderItem = {
  basePrice: 9.89,
  id: "835c8dde-a73c-431d-bbac-a728e9281e00",
  orderTotal: 10.51,
  pizzaName: "small",
  selectedToppings:
    [{ name: "pepperoni", price: 0.4, __typename: "topping" },
    { name: "bell peps", price: 0.22, __typename: "topping" }]
}

describe('Cart reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: null }))
      .toEqual({
        items: [],
      });
  });

  it('should handle EMPTY_CART', () => {
    const state = { items: [orderItem] };
    const action = { type: EMPTY_CART };
    expect(
      reducer(state, action))
      .toEqual({
        items: [],
      });
  });

  it('should handle ADD_ITEM_TO_CART', () => {
    const state = { items: [] };
    const action = { type: ADD_ITEM_TO_CART, cartItem: orderItem };
    expect(
      reducer(state, action))
      .toEqual({ items: [orderItem] });
  });

  it('should handle REMOVE_CART_ITEM', () => {
    const state = { items: [orderItem] };
    const action = { type: REMOVE_CART_ITEM, id: orderItem.id }
    expect(
      reducer(state, action))
      .toEqual({ items: [] });
  });
});
