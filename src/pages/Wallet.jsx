import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, addExpensis } from '../actions';
import Header from '../components/Header';
import Currency from '../components/Currency';
import Payment from '../components/Payment';
import Tag from '../components/Tag';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '0',
      currency: 'USD',
      description: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitExpensis = this.submitExpensis.bind(this);
  }

  async componentDidMount() {
    const { fetchCurr } = this.props;
    await fetchCurr();
    // console.log(fetchCurr);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async submitExpensis() {
    const { fetchCurr, allCoins, addExpense } = this.props;
    const { id } = this.state;
    await fetchCurr();
    addExpense({
      ...this.state,
      exchangeRates: allCoins,
    });

    return this.setState({
      id: id + 1,
      value: '',
      description: '',
    });
  }

  render() {
    const { value, description } = this.state;
    const { allCoins } = this.props;
    console.log('alou', allCoins);
    return (
      <>
        <Header />
        <form action="" className="form-expenses">
          <label htmlFor="value">
            Valor
            <input
              type="text"
              name="value"
              value={ value }
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <Currency changeInput={ this.handleChange } />
          <Payment changeInput={ this.handleChange } />
          <Tag changeInput={ this.handleChange } />
          <button type="button" onClick={ this.submitExpensis }>Adicionar despesa</button>
        </form>
        <Table />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state,
  allCoins: state.wallet.allCurrencies,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCurr: () => dispatch(fetchCurrency()),
  addExpense: (obj) => dispatch(addExpensis(obj)),
});

Wallet.defaultProps = {
  allCoins: undefined,
};

Wallet.propTypes = {
  fetchCurr: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  allCoins: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object]),
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
