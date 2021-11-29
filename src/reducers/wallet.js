import {
  REQUEST_API,
  ADD_EXPENSES,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
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
      expenses: state.expenses.filter((element) => element.id !== action.obj.id),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses
        .filter((element) => element.id !== action.objEdit.id), action.objEdit]
        .sort((a, b) => a.id - b.id),
    };
  default:
    return state;
  }
}

export default wallet;
