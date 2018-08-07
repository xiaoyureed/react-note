import { connect } from 'react-redux';
import ContentUI from './ui/Content';

const Content = connect(
  state => ({
    content: state.content,
  }),
)(ContentUI);

export default Content;
