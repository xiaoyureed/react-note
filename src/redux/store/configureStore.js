import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

const store = createStore(
  rootReducer,
  // initialState,
  // applyMiddleware(createLogger({ stateTransformer: state => state.toJS() })), // bug
);

export default store;
