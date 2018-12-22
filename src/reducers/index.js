import { combineReducers } from 'redux';
import editPizza from '../modules/EditPizza/reducer';

const reducers = {
  editPizza,
};

export default combineReducers(reducers);
