import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import signUp from './signUp';
import Login from './users/Login';
import CurrentUserProvider from './contexts/CurrentUser'
import './App.css';

function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <Switch>
          <Route path="/signUp" component={signUp} />
          <Route path="/Login" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </CurrentUserProvider>
  );
}

export default App;
