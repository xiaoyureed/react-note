import AppDispatcher from '../dispatcher/AppDispatcher';
import { ADD_TODO } from '../constants/actionTypes';
/**
 * Action Creator, 创建一个action, 发送给AppDispatcher处理
 */
const TodoActions = {
  /**
   * 添加待办项
   * @param text 待办
   */
  addTodo(text) {
    AppDispatcher.handleAction({
      type: ADD_TODO,
      payload: {
        text,
      },
    });
  },
};

export default TodoActions;
