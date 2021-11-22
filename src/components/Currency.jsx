import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Currency extends Component {
  render() {
    const { allCoins, changeInput } = this.props;
    // console.log(Object.keys(allCoins));
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          name="currency"
          id="currency"
          data-testid="currency-input"
          onChange={ changeInput }
        >
          { Object.keys(allCoins)
            .filter((el) => el !== 'USDT')
            .map((curr) => (
              <option key={ curr } data-testid={ curr }>
                {curr}
              </option>
            ))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  allCoins: state.wallet.currencies,
});

Currency.propTypes = {
  allCoins: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object]).isRequired,
  changeInput: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Currency);
