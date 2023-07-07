import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import React, { useRef } from 'react';
import LandingPage from "./pages/LandingPage";
import "./App.css";
import BrPage from "./components/BrPage/BrPage";
import About from './components/About/About';
// import ButtonsGroup from './components/navButtons/Buttons';
import Buttton from './components/Button/Button';
function App() {
    const myRef = useRef(null);
  return (
    <div>
    <BrowserRouter>
    <main>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/BRs" element={<BrPage/>}/>
        <Route path="/Gallery" element={<About/>}/>
      </Routes>
    </main>
    </BrowserRouter>  
    </div>
  );
}

export default App;
