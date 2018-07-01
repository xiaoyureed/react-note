import { connect } from 'react-redux';
import InputUi from '../ui/InputUi';
import action from '../../action/action';

const Input = connect(
  state => ({
    value: state.value,
  }),
  dispatch => ({
    onChange: event => dispatch(action.changeContentAction(event.target.value)),
  }),
)(InputUi);

export default Input;
