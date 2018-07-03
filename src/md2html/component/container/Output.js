import { connect } from 'react-redux';
import Remarkable from 'remarkable';
import format from 'html-format';
import OutputUi from '../ui/OutputUi';

const Output = connect(
  state => ({
    html: format(new Remarkable().render(state.value)),
  }),
)(OutputUi);

export default Output;
