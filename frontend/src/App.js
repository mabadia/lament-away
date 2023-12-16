import React from 'react';
import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';
import signUp from './users/signUp';
import Login from './users/Login';
import Home from './users/Home' ; 
import Feed from './users/Feed' ;
import CurrentUserProvider from './contexts/CurrentUser';
import EditPlaceForm from './jobs/editJobForm';
import Home from './Home';
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

// function App() {
//   return (
//     <CurrentUserProvider>
//       <Router>
//         <Switch>
// {/*Switch component so one route runs at 1 time only*/ }
// {/*Route is path after the route of the home page*/ }
//           <Route path="/signUp" component={signUp} />
//           <Route path="/Login" component={Login} />
//           <Route path="/home" component={Home} />
//           <Route path="/feed" component={Feed}/>
//         </Switch>
//       </Router>
//     </CurrentUserProvider>
//   );
// }

// function App() {
//   return (
//     <CurrentUserProvider>
//       <BrowserRouter>
//         <>
//           <Navigation />
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/signUp" element={<signUp />} />
//             <Route exact path="/Login" element={<Login />} />
//             <Route exact path="/home" element={<Home />} />
//             <Route exact path="/editJob" element={<EditPlaceForm />} />
//           </Routes>
//         </>
//       </BrowserRouter>
//     </CurrentUserProvider>
//   );
// }
