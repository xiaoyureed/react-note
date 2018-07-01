import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import { createLogger } from 'redux-logger';
import valueReducer from '../reducer/valueReducer';
import state from './state';

const store = createStore(
  valueReducer,
  state,
  applyMiddleware(logger),
);

export default store;
