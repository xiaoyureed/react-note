import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './InputUi.css';

/* class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = state;
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <textarea value={value} onChange={this.onChange} />
      </div>
    );
  }
} */

const InputUi = ({ value, onChange }) => (
  // <textarea className={`${styles.input} form-control`} onChange={onChange} value={value} />

  <div className={`${css.input} panel panel-default`}>
    <div className="panel-heading">
      <span className={css.title}>
      markdown
      </span>
    </div>
    <div className="panel-body">
      <textarea rows="20" className="form-control" onChange={onChange} value={value} />
    </div>
  </div>
);

InputUi.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputUi;
