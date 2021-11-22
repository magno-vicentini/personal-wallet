import {
  REQUEST_API,
  ADD_EXPENSES,
  DELETE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalField: 0,
  allCurrencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      currencies: [...Object.keys(action.data)]
        .filter((el) => el !== 'USDT'),
      allCurrencies: [...Object.entries(action.data)]
        .reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), []),
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.obj],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses].filter((element) => element !== action.obj),
    };
  default:
    return state;
  }
}

export default wallet;
