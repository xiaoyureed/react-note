import AppDispatcher from '../dispatcher/AppDispatcher';
import { ADD_TODO } from '../constants/actionTypes';
/**
 * Action , 内部通过发送给AppDispatcher处理
 */
const TodoActions = {
  /**
   * 添加待办项
   * @param text 待办
   */
  addTodo(text) { // TodoActions对象的addTodo方法
    AppDispatcher.handleAction({
      type: ADD_TODO,
      payload: {
        text, // 属性和值相同, 省略了值
      },
    });
  },
};

export default TodoActions;
