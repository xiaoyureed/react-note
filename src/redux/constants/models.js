import Immutable from 'immutable';

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
