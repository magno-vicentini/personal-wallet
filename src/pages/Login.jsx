import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import '../styles/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  validation() {
    const { email, password } = this.state;
    const minPass = 5;
    const regexEmail = /\S+@\S+\.+com/;
    if (regexEmail.test(email) && password.length > minPass) return false;
    return true;
  }

  render() {
    const { email, password } = this.state;
    const { loginEmail } = this.props;
    return (
      <div className="login-container">
        <h1>Personal Wallet</h1>
        <p>Sing Up</p>

        <div className="card-input">
          <p>Email: </p>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
            placeholder="example@example.com"
          />

        </div>

        <div className="card-input">
          <p>Password:</p>
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="submit"
              className={ (this.validation()) ? 'button-disable' : 'button-enable' }
              disabled={ this.validation() }
              onClick={ () => loginEmail(email) }
            >
              Entrar
            </button>
          </Link>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginEmail: (email) => dispatch(loginUser(email)),
});

Login.propTypes = {
  loginEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
