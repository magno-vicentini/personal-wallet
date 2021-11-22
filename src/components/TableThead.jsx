import React, { Component } from 'react';

export default class TableThead extends Component {
  render() {
    return (
      <thead className="container-thead">
        <tr className="column-thead"><td>Descrição</td></tr>
        <tr className="column-thead"><td>Tag</td></tr>
        <tr className="column-thead"><td>Método de pagamento</td></tr>
        <tr className="column-thead"><td>Valor</td></tr>
        <tr className="column-thead">
          <td className="currency-type">Moeda</td>
          <td className="currency-exchange">Câmbio utilizado</td>
        </tr>
        <tr className="column-thead"><td>Valor convertido</td></tr>
        <tr className="column-thead"><td>Moeda de conversão</td></tr>
        <tr className="column-thead"><td>Editar/Excluir</td></tr>
      </thead>
    );
  }
}
