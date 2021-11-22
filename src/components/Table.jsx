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
        <tbody>
          { allExpenses.map((expense) => {
            const currUsed = Object.values(expense.exchangeRates)
              .filter((currencyUsed) => currencyUsed.codein !== 'BRLT'
                && currencyUsed.code === expense.currency)[0];

            return (
              <tr key={ expense.id } className="row-expense">
                <th className="cell-tbody">{expense.description}</th>
                <th className="cell-tbody">{expense.tag}</th>
                <th className="cell-tbody">{expense.method}</th>
                <th className="cell-tbody">{expense.value}</th>
                <th className="cell-tbody">
                  {currUsed.name.split('/')[0]}
                </th>
                <th className="cell-tbody">
                  {Number(currUsed.ask).toFixed(2)}
                </th>
                <th className="cell-tbody">
                  {(expense.value * Number(currUsed.ask)).toFixed(2)}
                </th>
                <th className="cell-tbody">Real</th>
                <th className="cell-tbody">
                  <button
                    type="button"
                    data-testid="delete-btn"
                  >
                    Excluir
                  </button>
                </th>
              </tr>);
          })}
        </tbody>

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
