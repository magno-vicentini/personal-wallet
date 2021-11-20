import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, totalField = 0 } = this.props;
    return (
      <header className="header-container">
        <div className="field-container">
          <p>Despesa Total:</p>
          <div data-testid="total-field">{ `R$ ${totalField} ` }</div>
          <div data-testid="header-currency-field">BRL</div>
        </div>
        <div data-testid="email-field" className="user">{ email }</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalField: state.wallet.totalField,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalField: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
