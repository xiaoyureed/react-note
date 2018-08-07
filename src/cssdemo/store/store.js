import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import { createLogger } from 'redux-logger';
import reducer from '../reducer/reducer';
import state from './state';

const store = createStore(
  reducer,
  state,
  applyMiddleware(logger),
);

export default store;
