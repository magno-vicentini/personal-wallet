import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency, addExpensis, editExpense } from '../actions';
import Header from '../components/Header';
import Currency from '../components/Currency';
import Payment from '../components/Payment';
import Tag from '../components/Tag';
import Table from '../components/Table';
import InputValue from '../components/InputValue';
import InputDesc from '../components/InputDesc';
import '../styles/Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '0',
      currency: 'USD',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      isEditing: false,
      prevId: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitExpensis = this.submitExpensis.bind(this);
    this.expenseEditing = this.expenseEditing.bind(this);
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
    const { fetchCurr, allCoins, addExpense, editExp } = this.props;
    const {
      id, value, description, exchangeRates,
      currency, method, tag, isEditing, prevId,
    } = this.state;
    if (isEditing) {
      editExp({
        id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates,
      });
      return this.setState({
        id: prevId,
        value: '',
        description: '',
        isEditing: false,
      });
    }
    await fetchCurr();

    addExpense({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: allCoins,
    });

    return this.setState({
      id: id + 1,
      value: '',
      description: '',
    });
  }

  expenseEditing(expense) {
    const { currency, description, value, method, tag, exchangeRates } = expense;
    const { id } = this.state;
    this.setState({
      isEditing: true,
      id: expense.id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
      prevId: id,
    });
  }

  render() {
    const { value, description, isEditing } = this.state;
    return (
      <div className="wallet-page">
        <Header />
        <form action="" className="form-expenses">
          <InputValue changeInput={ this.handleChange } value={ value } />
          <InputDesc changeInput={ this.handleChange } desc={ description } />
          <Currency changeInput={ this.handleChange } />
          <Payment changeInput={ this.handleChange } />
          <Tag changeInput={ this.handleChange } />
          {
            (!isEditing)
              ? (
                <button
                  type="button"
                  className="button-send"
                  onClick={ this.submitExpensis }
                >
                  Adicionar despesa
                </button>
              )
              : (
                <button
                  type="button"
                  className="button-send"
                  onClick={ this.submitExpensis }
                >
                  Editar despesa
                </button>
              )
          }

        </form>
        <Table expenseEditing={ this.expenseEditing } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state,
  allCoins: state.wallet.allCurrencies,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCurr: () => dispatch(fetchCurrency()),
  addExpense: (objAdd) => dispatch(addExpensis(objAdd)),
  editExp: (objEdit) => dispatch(editExpense(objEdit)),
});

Wallet.defaultProps = {
  allCoins: undefined,
};

Wallet.propTypes = {
  fetchCurr: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  editExp: PropTypes.func.isRequired,
  allCoins: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object]),
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
