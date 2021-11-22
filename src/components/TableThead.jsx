import React, { Component } from 'react';

export default class TableThead extends Component {
  render() {
    return (
      <thead>
        <tr className="row-expense">
          <th className="column-thead">Descrição</th>
          <th className="column-thead">Tag</th>
          <th className="column-thead">Método de pagamento</th>
          <th className="column-thead">Valor</th>
          <th className="column-thead">Moeda</th>
          <th className="column-thead">Câmbio utilizado</th>
          <th className="column-thead">Valor convertido</th>
          <th className="column-thead">Moeda de conversão</th>
          <th className="column-thead">Editar/Excluir</th>
        </tr>
      </thead>
    );
  }
}
