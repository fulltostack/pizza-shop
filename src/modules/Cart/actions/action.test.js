import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import { addItemToCart, emptyCart, removeCartItem } from './index';
import { ADD_ITEM_TO_CART, EMPTY_CART, REMOVE_CART_ITEM } from './action-types';

const mockStore = configureMockStore();
const store = mockStore({});

const orderItem = {
  basePrice: 9.89,
  id: "835c8dde-a73c-431d-bbac-a728e9281e00",
  orderTotal: 10.51,
  pizzaName: "small",
  selectedToppings:
    [{ name: "pepperoni", price: 0.4, __typename: "topping" },
    { name: "bell peps", price: 0.22, __typename: "topping" }]
}

describe('Create car actions', () => {

  beforeEach(() => {
    store.clearActions();
  });

  it('creates EMPTY_CART action from its action creator', (done) => {

    const expectedEmptyAction = {
      type: EMPTY_CART,
    };
    const createdEmptyAction = emptyCart();

    expect(createdEmptyAction).toEqual(expectedEmptyAction);
    done();
  });

  it('creates ADD_ITEM_TO_CART action from its action creator', (done) => {


    const expectedAddAction = {
      type: ADD_ITEM_TO_CART,
      cartItem: orderItem
    };
    const createdAddAction = addItemToCart(orderItem);

    expect(createdAddAction).toEqual(expectedAddAction);
    done();
  });

  it('creates REMOVE_CART_ITEM action from its action creator', (done) => {
    const expectedUpdateToppingAction = {
      type: REMOVE_CART_ITEM,
      id: 10,
    };
    const createdUpdateToppingAction = removeCartItem(10);

    expect(createdUpdateToppingAction).toEqual(expectedUpdateToppingAction);
    done();
  });

  it('dispatch EMPTY_CART', (done) => {

    const expectedAction = [{
      type: EMPTY_CART,
    }];

    store.dispatch(emptyCart());
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);
    done();
  });

  it('dispatch ADD_ITEM_TO_CART', (done) => {

    const expectedAction = [{
      type: ADD_ITEM_TO_CART,
      cartItem: orderItem
    }];

    store.dispatch(addItemToCart(orderItem));
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);
    done();
  });

  it('dispatch REMOVE_CART_ITEM', (done) => {
    const expectedAction = [{
      type: REMOVE_CART_ITEM,
      id: orderItem.id
    }];

    store.dispatch(removeCartItem(orderItem.id));
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);

    done();
  });

});

