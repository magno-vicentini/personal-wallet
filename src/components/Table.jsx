import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableThead from './TableThead';
import { deleteExpense } from '../actions';

class Table extends Component {
  render() {
    const { allExpenses, deleteItem, expenseEditing } = this.props;
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
                  data-testid="edit-btn"
                  onClick={ () => expenseEditing(expense) }
                >
                  Editar
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => deleteItem(expense) }
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
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (obj) => dispatch(deleteExpense(obj)),
});

Table.propTypes = {
  allExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteItem: PropTypes.func.isRequired,
  expenseEditing: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
