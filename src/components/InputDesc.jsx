import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDesc extends Component {
  render() {
    const { changeInput, desc } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          name="description"
          value={ desc }
          data-testid="description-input"
          onChange={ changeInput }
        />
      </label>
    );
  }
}

InputDesc.propTypes = {
  changeInput: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired,
};

export default InputDesc;
