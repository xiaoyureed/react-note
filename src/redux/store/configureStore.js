import { createStore, applyMiddleware } from 'redux';
import { logger, createLogger } from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
// import Immutable from 'immutable';
import rootReducer from '../reducers';
// import todoState from '../constants/models';

// const initialState = Immutable.Map();

const store = createStore(
  rootReducer,
  // todoState, // initialState,
  applyMiddleware(createLogger({
    stateTransformer: state => (state.toJS()), // convert Immutable object to plain JSON
  })), // applyMiddleware(logger),
);

export default store;
