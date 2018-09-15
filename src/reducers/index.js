import { combineReducers } from 'redux';
import ListStore from './list-reducer';
import selectStoreReducer from './selectStore-reducer';

const rootReducer = combineReducers({
    store: ListStore,
    selectMicromania: selectStoreReducer
});

export default rootReducer;
