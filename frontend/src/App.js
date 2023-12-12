import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Navigation from './Navigation';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import signUp from './signUp';
import Login from './users/Login';
import CurrentUserProvider from './contexts/CurrentUser'
import Home from './Home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <>
     <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
     
     </>
    </BrowserRouter>
    
  //   <CurrentUserProvider>
  //   <Router>
  //     <Switch>
  //       <Route path="/signUp" component={signUp} />
  //       <Route path="/Login" component={Login} />
  //       <Route path="/home" component={Home} />
  //     </Switch>
  //   </Router>
  // </CurrentUserProvider>
    );
}

export default App;
