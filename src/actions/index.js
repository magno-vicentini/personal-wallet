// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const REQUEST_API = 'REQUEST_API';
export const ADD_VALOR = 'ADD_VALOR';
export const ADD_EXPENSES = 'ADD_EXPENSIS';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const SUB_VALOR = 'SUB_VALOR';

export const getCurrency = (data) => ({
  type: REQUEST_API,
  data,
});

export const loginUser = (email) => ({
  type: LOGIN_USER,
  email,
});

export const sumAllValor = (valor) => ({
  type: ADD_VALOR,
  valor,
});

export const subAllValor = (valor) => ({
  type: SUB_VALOR,
  valor,
});

export const addExpensis = (obj) => ({
  type: ADD_EXPENSES,
  obj,
});

export const deleteExpense = (obj) => ({
  type: DELETE_EXPENSE,
  obj,
});

export function fetchCurrency() {
  const CURR_API = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => fetch(CURR_API)
    .then((response) => response.json())
    .then((data) => dispatch(getCurrency(data)));
}
