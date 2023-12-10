import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'


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
  );
}

export default App;
