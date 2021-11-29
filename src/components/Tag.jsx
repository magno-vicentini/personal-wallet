import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tag extends Component {
  constructor() {
    super();
    this.state = {
      expenditure: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
  }

  render() {
    const { expenditure } = this.state;
    const { changeInput } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          data-testid="tag-input"
          onChange={ changeInput }
        >
          { expenditure.map((el) => <option key={ el } value={ el }>{el}</option>)}
        </select>
      </label>
    );
  }
}

Tag.propTypes = {
  changeInput: PropTypes.func.isRequired,
};
