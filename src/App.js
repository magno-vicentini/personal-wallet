import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/personal-wallet" component={ Login } />
        <Route path="/carteira"><Wallet /></Route>
      </Switch>
    );
  }
}

export default App;
