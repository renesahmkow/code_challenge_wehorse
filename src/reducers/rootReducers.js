import { combineReducers } from 'redux';
import setupReducer from './setupReducer';

export default combineReducers({
  courseList: setupReducer
});
