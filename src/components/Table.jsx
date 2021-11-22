import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { allExpenses } = this.props;
    console.log(allExpenses);
    return (
      <table className="column-table">
        <thead className="container-thead">
          <tr className="column-thead"><th>Descrição</th></tr>
          <tr className="column-thead"><th>Tag</th></tr>
          <tr className="column-thead"><th>Método de pagamento</th></tr>
          <tr className="column-thead"><th>Valor</th></tr>
          <tr className="column-thead">
            <th className="currency-column">Moeda</th>
            <th>Câmbio utilizado</th>
          </tr>
          <tr className="column-thead"><th>Valor convertido</th></tr>
          <tr className="column-thead"><th>Moeda de conversão</th></tr>
          <tr className="column-thead"><th>Editar/Excluir</th></tr>
        </thead>
        <tbody className="container-thead">
          <tr className="column-tbody">
            { allExpenses.map((desc) => <th key={ desc.id }>{desc.description}</th>)}
          </tr>
          <tr className="column-tbody">
            { allExpenses.map((tag) => <th key={ tag.id }>{tag.tag}</th>)}
          </tr>
          <tr className="column-tbody">
            { allExpenses.map((method) => <th key={ method.id }>{method.method}</th>)}
          </tr>
          <tr className="column-tbody">
            { allExpenses.map((value) => <th key={ value.id }>{value.value}</th>)}
          </tr>
          <tr className="column-tbody">
            { allExpenses.map((value) => <th key={ value.id }>{value.value}</th>)}
          </tr>
          <tr className="column-tbody">
            { allExpenses.map((value) => <th key={ value.id }>{value.value}</th>)}
          </tr>
          <tr className="column-tbody">
            { allExpenses.map((curr) => <th key={ curr.id }>Real</th>)}
          </tr>
          <tr className="column-tbody">
            { allExpenses
              .map((curr) => <button key={ curr.id } type="button">Delete</button>)}
          </tr>
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
