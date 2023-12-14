import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import signUp from './signUp';
import Login from './users/Login';
import Home from './users/Home' ; 
import Feed from './users/Feed' ;


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
          <Route path="/feed" component={Feed}/>
        </Switch>
      </Router>
    </CurrentUserProvider>
  );
}

export default App;
