import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ADD_TODO } from '../constants/actionTypes';

const store = {
  todos: [],
  editing: false,
};

class TodoStoreClass extends EventEmitter {
  constructor(props) {
    super(props);
    // this.getTodos = this.getTodos.bind(this);// 注释掉貌似也行, 没用到props, state
    this.store = store;
  }

  addChangeListener(callback) {
    this.on(ADD_TODO, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(ADD_TODO, callback);
  }

  getTodos() {
    return this.store.todos;
  }
}

const TodoStore = new TodoStoreClass();

AppDispatcher.register((action) => {
  switch (action.type) {
    case ADD_TODO:
      store.todos.push(action.payload.text);
      TodoStore.emit(ADD_TODO);
      break;
    default:
      return true;
  }
  return true;
});

export default TodoStore;
