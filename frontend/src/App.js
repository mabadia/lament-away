import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import React from 'react';
import signUp from './users/signUp';
import Login from './users/Login';
import CurrentUserProvider from './contexts/CurrentUser'
import Home from './Home'
import './App.css';

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signUp" component={signUp} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/home" component={Home} />
          </Routes>

        </>
      </BrowserRouter>
    </CurrentUserProvider>

  );
}

export default App;
