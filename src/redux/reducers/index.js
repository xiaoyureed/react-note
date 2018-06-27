import { combineReducers } from 'redux-immutable';
import uiReducers from './ui/uiReducers';// import routes from './routes';
import todo from './data/todoReducers';// import routes from './routes';

const rootReducer = combineReducers({
  todo,
  uiReducers,
});

export default rootReducer;
