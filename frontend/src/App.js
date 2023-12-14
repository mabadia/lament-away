import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import EditPlaceForm from './jobs/editJobForm';
// import Login from './users/Login'
// import SignUp from './users/signUp'

function App() {
  return (
    <BrowserRouter>
    <>
     <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/editJob" element={<EditPlaceForm />}/>
        {/* <Route exact path="/login" element={<Login />}/> */}
        {/* <Route exact path="/signUp" element={<SignUp />}/> */}
      </Routes>
     
     </>
    </BrowserRouter>
  );
}

export default App;
