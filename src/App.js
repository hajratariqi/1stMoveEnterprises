import './App.css';
import Home from './Pages/Home'
import React from 'react';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
<div>
  <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;
