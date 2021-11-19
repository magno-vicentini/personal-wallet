import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalField: 0,
      expenditure: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
      currency: [],
    };
    this.fetchCurrency = this.fetchCurrency.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  fetchCurrency() {
    const CURR_API = 'https://economia.awesomeapi.com.br/json/all';
    fetch(CURR_API)
      .then((response) => response.json())
      .then((data) => this.setState({ currency: [...Object.values(data)] }));
  }

  render() {
    const { email } = this.props;
    const { totalField, expenditure, currency } = this.state;
    console.log(currency);
    return (
      <>
        <header className="header-container">
          <div className="field-container">
            <p>Despesa Total:</p>
            <div data-testid="total-field">{ `R$ ${totalField},00` }</div>
            <div data-testid="header-currency-field">BRL</div>
          </div>
          <div data-testid="email-field" className="user">{ email }</div>
        </header>
        <form action="">
          <label htmlFor="value">
            Valor
            <input type="text" name="" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" name="" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select name="" id="currency">
              { currency.filter((element) => element.codein !== 'BRLT')
                .map((curr) => <option key={ curr.code }>{curr.code}</option>)}
            </select>
          </label>
          <label htmlFor="currency">
            Método de pagamento
            <select name="" id="currency">
              <option value="">Dinheiro</option>
              <option value="">Cartão de crédito</option>
              <option value="">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="" id="tag">
              { expenditure.map((el) => <option key={ el }>{el}</option>)}
            </select>
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
