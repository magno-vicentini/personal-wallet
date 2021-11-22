import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableThead from './TableThead';
import { deleteExpense, fetchCurrency } from '../actions';

class Table extends Component {
  constructor() {
    super();
    this.deleteCurrentExpense = this.deleteCurrentExpense.bind(this);
  }

  async deleteCurrentExpense(expense) {
    const { deleteItem, allCoins, fetchCurr } = this.props;
    deleteItem(expense);
    console.log('aqui coins ', allCoins);
    await fetchCurr();
  }

  render() {
    const { allExpenses } = this.props;
    console.log(allExpenses);
    return (
      <table className="column-table">
        <TableThead />
        <tbody>
          { allExpenses.map((expense) => (
            <tr key={ expense.id } className="row-expense">
              <td className="cell-tbody">{expense.description}</td>
              <td className="cell-tbody">{expense.tag}</td>
              <td className="cell-tbody">{expense.method}</td>
              <td className="cell-tbody">{expense.value}</td>
              <td className="cell-tbody">
                {expense.exchangeRates[expense.currency].name.split('/')[0]}
              </td>
              <td className="cell-tbody">
                {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td className="cell-tbody">
                {(expense.value * Number(expense.exchangeRates[expense.currency].ask))
                  .toFixed(2)}
              </td>
              <td className="cell-tbody">Real</td>
              <td className="cell-tbody">
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.deleteCurrentExpense(expense) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  allExpenses: state.wallet.expenses,
  allCoins: state.wallet.allCurrencies,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (obj) => dispatch(deleteExpense(obj)),
  fetchCurr: () => dispatch(fetchCurrency()),
});

Table.defaultProps = {
  allCoins: undefined,
};

Table.propTypes = {
  fetchCurr: PropTypes.func.isRequired,
  allExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteItem: PropTypes.func.isRequired,
  allCoins: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object]),
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
