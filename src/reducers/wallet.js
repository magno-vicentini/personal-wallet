import {
  REQUEST_API,
  ADD_VALOR,
  ADD_EXPENSES,
  DELETE_EXPENSE,
  SUB_VALOR,
} from '../actions';

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
      currencies: [...Object.entries(action.data)]
        .reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), []),
    };
  case ADD_VALOR:
    return {
      ...state,
      totalField: state.totalField + action.valor,
    };
  case SUB_VALOR:
    return {
      ...state,
      totalField: state.totalField - action.valor,
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
