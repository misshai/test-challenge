import {combineReducers} from 'redux';
import itemsReducer from './itemsReducer';
import sortReducer from './sortReducer';
import filterReducer from './filterReducer';

export default combineReducers({items: itemsReducer, sortBy: sortReducer, filterBy: filterReducer});
