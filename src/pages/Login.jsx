import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';

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
        <input
          type="email"
          name="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
          placeholder="example@example.com"
        />
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
            disabled={ this.validation() }
            onClick={ () => loginEmail(email) }
          >
            Entrar
          </button>
        </Link>
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
