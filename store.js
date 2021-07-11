import {combineReducers, createStore} from 'redux';
import {rawData} from './Reducers/rawData';

const reducers = combineReducers({
  rawData: rawData,
});

const store = createStore(reducers);

export default store;
