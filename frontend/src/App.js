import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useRef } from 'react';
import LandingPage from "./pages/LandingPage";
import "./App.css";
import BrPage from "./components/BrPage/BrPage";
import Galllery from "./pages/Gallery/Gallery"
function App() {
  return (
    <div style={{ minWidth: "100%" }} >
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/BRs' element={<BrPage />} />
            <Route path='/Gallery' element={<Galllery />} />
            <Route path='/contact' element={<LandingPage />} />

          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
