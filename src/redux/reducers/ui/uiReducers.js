import { handleActions } from 'redux-actions';
import TodoState from '../../constants/models';

const uiReducers = handleActions({
  SHOW: (state, { payload }) => (
    state.set('todos', payload.todo)
  ),
}, TodoState);

export default uiReducers;
