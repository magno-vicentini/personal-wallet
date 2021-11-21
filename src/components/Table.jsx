import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { allExpensis } = this.props;
    return (
      <div className="container-table">
        <div className="column-table">
          <h3>Descrição</h3>
          { allExpensis.map((desc) => <p key={ desc.id }>{desc.description}</p>)}
        </div>
        <div className="column-table">
          <h3>Tag</h3>
          { allExpensis.map((tag) => <p key={ tag.id }>{tag.tag}</p>)}
        </div>
        <div className="column-table">
          <h3>Método de pagamento</h3>
          { allExpensis.map((method) => <p key={ method.id }>{method.method}</p>)}
        </div>
        <div className="column-table">
          <h3>Valor</h3>
          { allExpensis.map((value) => <p key={ value.id }>{value.value}</p>)}
        </div>
        <div className="column-table">
          <div className="currency-column">
            <h3>Moeda</h3>
            <h3>Câmbio utilizado</h3>
            {/* { allExpensis.map((curr) => <p key={ curr.id }>{value.value}</p>)} */}
          </div>
        </div>
        <div className="column-table">
          <h3>Valor convertido</h3>
          { allExpensis.map((valor) => <p key={ valor.id }>{valor.valor}</p>)}
        </div>
        <div className="column-table">
          <h3>Moeda de conversão</h3>
          { allExpensis.map((curr) => <p key={ curr.id }>Real</p>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allExpensis: state.wallet.expensis,
});

Table.propTypes = {
  allExpensis: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
