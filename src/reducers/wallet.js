import { REQUEST_API, ADD_VALOR, ADD_EXPENSIS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalField: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      currencies: [...Object.values(action.data)]
        .filter((element) => element.codein !== 'BRLT')
        .reduce((acc, curr) => ({ ...acc, [curr.code]: curr }), []),
    };
  case ADD_VALOR:
    return {
      ...state,
      totalField: state.totalField + action.valor,
    };
  case ADD_EXPENSIS:
    return {
      ...state,
      expenses: [...state.expenses, action.obj],
    };
  default:
    return state;
  }
}

export default wallet;
