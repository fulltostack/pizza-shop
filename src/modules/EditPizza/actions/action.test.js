import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import { resetFormData, updateFormData, updateToppings } from './index';
import { RESET_FORM_DATA, UPDATE_FORM_DATA, UPDATE_TOPPINGS } from './action-types';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Create pizza actions', () => {

  beforeEach(() => {
    store.clearActions();
  });

  it('creates RESET_FORM_DATA action from its action creator', (done) => {

    const expectedResetAction = {
      type: RESET_FORM_DATA,
    };
    const createdResetAction = resetFormData();

    expect(createdResetAction).toEqual(expectedResetAction);
    done();
  });

  it('creates UPDATE_FORM_DATA action from its action creator', (done) => {

    const expectedUpdateFormAction = {
      type: UPDATE_FORM_DATA,
      fieldName: 'size',
      value: 10,
    };
    const createdUpdateFormAction = updateFormData('size', 10);

    expect(createdUpdateFormAction).toEqual(expectedUpdateFormAction);
    done();
  });

  it('creates UPDATE_TOPPINGS action from its action creator', (done) => {
    const topping = { name: 'cheese', price: 0.1, __typename: 'topping' };
    const expectedUpdateToppingAction = {
      type: UPDATE_TOPPINGS,
      topping: topping,
    };
    const createdUpdateToppingAction = updateToppings(topping);

    expect(createdUpdateToppingAction).toEqual(expectedUpdateToppingAction);
    done();
  });

  it('dispatch RESET_FORM_DATA', (done) => {

    const expectedAction = [{
      type: RESET_FORM_DATA,
    }];

    store.dispatch(resetFormData());
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);
    done();
  });

  it('dispatch UPDATE_FORM_DATA', (done) => {

    const expectedAction = [{
      type: UPDATE_FORM_DATA,
      fieldName: 'size',
      value: 10,
    }];

    store.dispatch(updateFormData('size', 10));
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);
    done();
  });

  it('dispatch UPDATE_TOPPINGS', (done) => {
    const topping = { name: 'cheese', price: 0.1, __typename: 'topping' };
    const expectedAction = [{
      type: UPDATE_TOPPINGS,
      topping
    }];

    store.dispatch(updateToppings(topping));
    const storeActions = store.getActions();

    expect(storeActions).toEqual(expectedAction);

    done();
  });

});

