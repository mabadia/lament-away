import React from 'react';
import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';
import signUp from './users/signUp';
import Login from './users/Login';
import CurrentUserProvider from './contexts/CurrentUser';
import EditPlaceForm from './jobs/editJobForm';
import Home from './Home';
import FYP from './FYP';
import NewComment from './jobs/NewComment';
import './App.css';


function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signUp" element={<signUp />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/editJob" element={<EditPlaceForm />} />
            <Route exact path="/fyp" element={<FYP />} />
            <Route path="/new-comment" element={<NewComment />} />
          </Routes>
        </>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
