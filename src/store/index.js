import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';
// import { initialStateWithExpenses } from '../tests/mockData';

const store = createStore(
  reducer,
  // initialStateWithExpenses,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
