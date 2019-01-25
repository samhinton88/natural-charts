import { combineReducers } from 'redux';
import uxReducer from './ux-reducer.js';
// import dataReducer from './data-reducer';

export default combineReducers({
  ux: uxReducer
})