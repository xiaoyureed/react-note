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
  onCreateTodo: () => { // onChangeText 就可以在组件中绑定到用户的操作（点击按钮等)使用了
    dispatch(createTodo());
    dispatch(changeText({ text: '' }));
  },
});

/**
 * 连接React组件与 Redux store, 包在容器组件的外一层
 * 容器性组件&展示性组件 https://blog.csdn.net/xuchaobei123/article/details/73433901
 */
export default connect(
  // 参数1: func, 返回object(props属性: props值)给当前comp用
  mapStateToProps,
  // 参数2: 函数，返回一个对象(内含多个方法)，方法名称作为props中的属性提供，值是fn: dispatch一个action，
  mapDispatchToProps,
  // 此外还有两个参数
)(TodoHeader);
