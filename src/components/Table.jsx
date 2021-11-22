import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableThead from './TableThead';

class Table extends Component {
  render() {
    const { allExpenses } = this.props;
    console.log(allExpenses);
    return (
      <table className="column-table">
        <TableThead />
        { allExpenses.map((expense) => {
          const currUsed = Object.values(expense.exchangeRates)
            .filter((currencyUsed) => currencyUsed.codein !== 'BRLT'
              && currencyUsed.code === expense.currency)[0];

          return (
            <tbody key={ expense.id } className="row-expense">
              <tr className="cell-tbody"><td>{expense.description}</td></tr>
              <tr className="cell-tbody"><td>{expense.tag}</td></tr>
              <tr className="cell-tbody"><td>{expense.method}</td></tr>
              <tr className="cell-tbody"><td>{expense.value}</td></tr>
              <tr className="cell-tbody">
                <td className="currency-type">
                  {currUsed.name.split('/')[0]}
                </td>
                <td className="currency-exchange">
                  {Number(currUsed.ask).toFixed(2)}
                </td>
              </tr>
              <tr className="cell-tbody">
                <td>
                  {(expense.value * Number(currUsed.ask)).toFixed(2)}
                </td>
              </tr>
              <tr className="cell-tbody"><td>Real</td></tr>
              <tr className="cell-tbody">
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>);
        })}

      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  allExpenses: state.wallet.expenses,
});

Table.propTypes = {
  allExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
