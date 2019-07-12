import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import counterReducer from './modules/counter';

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      counter: counterReducer,
    }),
  );
  
  return store;
}
