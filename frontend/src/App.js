import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import signUp from './users/signUp';
import Login from './users/Login';
import CurrentUserProvider from './contexts/CurrentUser';
import EditJobForm from './jobs/editJobForm';
import Home from './Home';
import FYP from './FYP';
import './App.css';
import BusinessIndex from './jobs/BusinessIndex';
import NewBusinessForms from './jobs/NewBusinessForms';
import BusinessDetails from './jobs/BusinessDetails';

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
            <Route exact path="/jobs" element={<BusinessIndex />} />
            <Route exact path="/jobs/new" element={<NewBusinessForms />} />
            <Route exact path="/jobs/:jobId" element={<BusinessDetails />} />
            <Route exact path="/jobs/:jobId/editJob" element={<EditJobForm />} />
            <Route exact path="/fyp" element={<FYP />} />
            <Route exact path="/" element={<Error404 />} />
          </Routes>
        </>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}


export default App;