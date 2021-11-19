import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions';
import Header from '../components/Header';
import Currency from '../components/Currency';
import Payment from '../components/Payment';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenditure: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { fetchCurr } = this.props;
    await fetchCurr();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { expenditure } = this.state;
    return (
      <>
        <Header />
        <form action="">
          <label htmlFor="value">
            Valor
            <input
              type="text"
              name="value"
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <Currency changeInput={ this.handleChange } />
          <Payment changeInput={ this.handleChange } />
          <label htmlFor="tag">
            Tag
            <select
              name="tag"
              id="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              { expenditure.map((el) => <option key={ el }>{el}</option>)}
            </select>
          </label>
          <button type="submit">Adicionar despesa</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCurr: () => dispatch(fetchCurrency()),
});

Wallet.propTypes = {
  fetchCurr: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
