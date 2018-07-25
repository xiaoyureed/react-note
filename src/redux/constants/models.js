import Immutable from 'immutable';
/**
 * 整个app的state
 */
const TodoState = Immutable.fromJS({
  todos: [],
  todo: {
    id: '',
    text: '',
    updatedAt: '',
    completed: false,
  },
});

export default TodoState;
