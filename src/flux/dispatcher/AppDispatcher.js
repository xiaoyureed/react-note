// Todo app dispatcher with actions responding to both
// view and server actions
import { Dispatcher } from 'flux';
/**
 * 自定义dispatcher, 处理action
 * 这里必须是一个class, 因为要继承Dispatcher
 */
class DispatcherClass extends Dispatcher {
  /**
   * dispatch出来一个action
   * @param action action
   */
  handleAction(action) {
    this.dispatch({
      type: action.type,
      payload: action.payload,
    });
  }
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;
