import { connect } from 'react-redux';
import ContentUI from './ui/Content';

const Content = connect(
  // Provider 组件提供了store, 所以这里可以拿到state, 返回一个pops对象;
  state => ({
    content: state.content.data, // 数组
  }),
)(ContentUI);

export default Content;
