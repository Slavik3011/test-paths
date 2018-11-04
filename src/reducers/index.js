import { combineReducers } from 'redux'
import searchReducer from './searchReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  search: searchReducer,
  modal: modalReducer,
});