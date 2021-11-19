import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      totalField: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { totalField } = this.state;
    return (
      <header className="header-container">
        <div className="field-container">
          <p>Despesa Total:</p>
          <div data-testid="total-field">{ `R$ ${totalField},00` }</div>
          <div data-testid="header-currency-field">BRL</div>
        </div>
        <div data-testid="email-field" className="user">{ email }</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
