import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import EditPlaceForm from './jobs/editJobForm';


function App() {
  return (
    <BrowserRouter>
    <>
     <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/editJob" element={<EditPlaceForm />}/>
      </Routes>
     
     </>
    </BrowserRouter>
  );
}

export default App;
