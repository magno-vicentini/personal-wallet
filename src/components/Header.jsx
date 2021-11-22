import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.sumTotalField = this.sumTotalField.bind(this);
  }

  sumTotalField() {
    const { allExpenses = 0 } = this.props;
    const sum = allExpenses
      .reduce((acc, curr) => acc
        + (Number(curr.value) * curr.exchangeRates[curr.currency].ask), 0);

    return sum;
  }

  render() {
    const { email, totalField = 0 } = this.props;
    console.log(totalField);
    return (
      <header className="header-container">
        <div className="field-container">
          <p>Despesa Total:</p>
          <div data-testid="total-field">{ `R$ ${this.sumTotalField()} ` }</div>
          <div data-testid="header-currency-field">BRL</div>
        </div>
        <div data-testid="email-field" className="user">{ email }</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  allExpenses: state.wallet.expenses,
});

Header.defaultProps = {
  totalField: undefined,
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalField: PropTypes.number,
  allExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
