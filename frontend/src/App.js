import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from './Navigation';
import CurrentUserProvider from './contexts/CurrentUser';
import EditJobForm from './jobs/editJobForm';
import Home from './Home';
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'


function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <>
          <Navigation />
         
          <Switch>
            <Route exact path="/" component={Home} />
            
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signUp" component={SignUpForm} />
            <Route exact path="/editJob" component={EditJobForm} />
          </Switch>
          
        </>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}


export default App;

// function App() {
//   return (
//     <BrowserRouter>
//     <>
//      <Navigation/>
//       <Routes>
//         <Route exact path="/" element={<Home />}/>
//         <Route exact path="/editJob" element={<EditPlaceForm />}/>
//         {/* <Route exact path="/login" element={<Login />}/> */}
//         {/* <Route exact path="/signUp" element={<SignUp />}/> */}
//       </Routes>
     
//      </>
//     </BrowserRouter>
//   );
// }