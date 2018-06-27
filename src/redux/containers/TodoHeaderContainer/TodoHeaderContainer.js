import { connect } from 'react-redux';
import TodoHeader from '../../components/TodoHeader';

import { changeText, createTodo } from '../../actions/todoActions';

const mapStateToProps = state => ({
  todo: state.getIn(['todo', 'todo']),
});

const mapDispatchToProps = dispatch => ({
  onChangeText: event => (
    dispatch(changeText({ text: event.target.value }))
  ),
  onCreateTodo: () => {
    dispatch(createTodo());
    dispatch(changeText({ text: '' }));
  },
});

/**
 * 连接React组件与 Redux store, 包在容器组件的外一层
 */
export default connect(
  // 参数1: func, 返回object(props属性: props值)
  mapStateToProps,
  // 参数2: 第二个参数也是一个函数，返回一个对象，对象的键同样是prop的属性名，值是一个redux的dispatch，
  // 当这个prop属性被用于触发时，dispatch会改变redux中state的值。
  mapDispatchToProps,
)(TodoHeader);
