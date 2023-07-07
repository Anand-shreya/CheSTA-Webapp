import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import React, { useRef } from 'react';
import LandingPage from "./pages/LandingPage";
import "./App.css";
import BrPage from "./components/BrPage/BrPage";
import Text from "./components/LandingScreen/CheSTA_text";
import Galllery from "./pages/Gallery/Gallery"
function App() {
    const myRef = useRef(null);
  return (
    <div style={{minWidth: "100%"}} >
     <BrowserRouter>
    <main>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/BRs' element={<BrPage/>}/>
        <Route path='/Gallery' element={<Galllery/>}/>
      </Routes>
    </main>
    </BrowserRouter> 
    </div>
  );
}

export default App;
