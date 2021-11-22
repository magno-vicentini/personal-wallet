import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Payment extends Component {
  render() {
    const { changeInput } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          name="method"
          id="method"
          onChange={ changeInput }
          data-testid="method-input"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

Payment.propTypes = {
  changeInput: PropTypes.func.isRequired,
};

export default Payment;
