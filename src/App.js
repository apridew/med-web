import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Navbar/Navbar';
import Landing_Page from './Landing_Page/Landing_Page';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page/>}/>
              </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;