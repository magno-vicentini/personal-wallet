// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = (email) => ({
  type: LOGIN_USER,
  email,
});
