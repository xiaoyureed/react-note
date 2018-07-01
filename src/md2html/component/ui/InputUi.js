import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  <div>
    <textarea onChange={onChange} value={value} />
  </div>
);

InputUi.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputUi;
