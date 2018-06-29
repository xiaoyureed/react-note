import { connect } from 'react-redux';
import TodoHeader from '../../components/TodoHeader';

import { changeText, createTodo } from '../../actions/todoActions';

const mapStateToProps = state => ({
  todo: state.getIn(['todo', 'todo']), // 将当前组件需要的state匹配到props中给comp用
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
  // 参数1: func, 返回object(props属性: props值)给当前comp用
  mapStateToProps,
  // 参数2: 函数，返回一个对象(内含多个方法)，对象的键同样是prop的属性名，值是dispatch一个action，
  mapDispatchToProps,
)(TodoHeader);
