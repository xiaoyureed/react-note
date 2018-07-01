import { connect } from 'react-redux';
import Remarkable from 'remarkable';
import OutputUi from '../ui/OutputUi';

const Output = connect(
  state => ({
    html: new Remarkable().render(state.value),
  }),
)(OutputUi);

export default Output;
