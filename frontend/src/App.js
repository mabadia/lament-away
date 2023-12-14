import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import signUp from './signUp';
import Login from './users/Login';
import Home from './users/Home' ; 
import Feed from './users/Feed' ;

import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import CurrentUserProvider from './contexts/CurrentUser'
import './App.css';

function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <Switch>
{/*Switch component so one route runs at 1 time only*/ }
{/*Route is path after the route of the home page*/ }
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
