import { connect } from 'react-redux';
import Remarkable from 'remarkable';
import format from 'html-format';
import copy from 'copy-to-clipboard';
import OutputUi from '../ui/OutputUi';
import action from '../../action/action';

const Output = connect(
  state => ({
    html: format(new Remarkable().render(state.value)),
  }),
  dispatch => ({
    onClick: (event) => {
      // click触发填充state中的html
      let i = event;
      const htmlStr = document.getElementById('htmlDiv').outerHTML;
      dispatch(action.clickButtonAction(htmlStr));

      // 复制到剪贴板
      // alert(htmlStr);
      copy(htmlStr);
      console.log('复制 success');
    },
  }),
  // null,
  // { withRef: true },
)(OutputUi);

export default Output;
