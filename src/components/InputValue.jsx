import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputValue extends Component {
  render() {
    const { changeInput, value } = this.props;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="text"
          name="value"
          value={ value }
          data-testid="value-input"
          onChange={ changeInput }
        />
      </label>
    );
  }
}

InputValue.propTypes = {
  changeInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputValue;
