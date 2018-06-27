import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ADD_TODO } from '../constants/actionTypes';

const store = {
  todos: [],
  editing: false,
};
/**
 * 自定义的todo store, 管理 todo项
 */
class TodoStoreClass extends EventEmitter {
  constructor(props) {
    super(props);
    // this.getTodos = this.getTodos.bind(this);// 注释掉貌似也行, 没用到props, state
    this.store = store;
  }

  // 设置 listener, ADD_TODO action发生时, call callback函数
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

/**
 * 注册处理action的function: 根据不同的action.type, 选择合适的store进行后续操作
 */
AppDispatcher.register((action) => {
  switch (action.type) {
    case ADD_TODO:
      store.todos.push(action.payload.text);
      TodoStore.emit(ADD_TODO); // 处理完后透过 emit 方法发出事件让监听的 Views Controller 知道
      break;
    default:
      return true;
  }
  return true;
});

export default TodoStore;
