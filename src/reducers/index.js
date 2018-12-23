import { combineReducers } from 'redux';
import editPizza from '../modules/EditPizza/reducer';
import cart from '../modules/Cart/reducer';

const reducers = {
  editPizza,
  cart,
};

export default combineReducers(reducers);
