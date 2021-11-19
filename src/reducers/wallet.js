import { REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expensis: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      currencies: [...Object.values(action.data)],
    };
  default:
    return state;
  }
}

export default wallet;
