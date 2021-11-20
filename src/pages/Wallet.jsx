import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, sumAllValor, addExpensis } from '../actions';
import Header from '../components/Header';
import Currency from '../components/Currency';
import Payment from '../components/Payment';
import Tag from '../components/Tag';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countSubmit: 0,
      value: '',
      currency: '',
      description: '',
      payment: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitExpensis = this.submitExpensis.bind(this);
  }

  async componentDidMount() {
    const { fetchCurr } = this.props;
    await fetchCurr();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async submitExpensis() {
    const { fetchCurr, addValor, allCoins, addExpense } = this.props;
    const { value, currency, countSubmit, description, payment, tag } = this.state;
    await fetchCurr();
    const currentCurrency = allCoins.filter((curr) => currency === curr.code)[0].ask;
    console.log(currentCurrency);
    addValor(Number(value) * currentCurrency);
    addExpense({
      countSubmit,
      value,
      currency,
      description,
      payment,
      tag,
      exchangeRates: { ...allCoins },
    });
  }

  render() {
    const { allCoins } = this.props;
    console.log(allCoins);
    return (
      <>
        <Header />
        <form action="">
          <label htmlFor="value">
            Valor
            <input
              type="text"
              name="value"
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <Currency changeInput={ this.handleChange } />
          <Payment changeInput={ this.handleChange } />
          <Tag changeInput={ this.handleChange } />
          <button type="button" onClick={ this.submitExpensis }>Adicionar despesa</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state,
  allCoins: state.wallet.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCurr: () => dispatch(fetchCurrency()),
  addValor: (valor) => dispatch(sumAllValor(valor)),
  addExpense: (obj) => dispatch(addExpensis(obj)),
});

Wallet.propTypes = {
  fetchCurr: PropTypes.func.isRequired,
  addValor: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  allCoins: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
