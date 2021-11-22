// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const REQUEST_API = 'REQUEST_API';
export const ADD_VALOR = 'ADD_VALOR';
export const ADD_EXPENSIS = 'ADD_EXPENSIS';

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

export const addExpensis = (obj) => ({
  type: ADD_EXPENSIS,
  obj,
});

export function fetchCurrency() {
  const CURR_API = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => fetch(CURR_API)
    .then((response) => response.json())
    .then((data) => dispatch(getCurrency(data)));
}
