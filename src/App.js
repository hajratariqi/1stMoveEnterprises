import './App.css';
import React from 'react';
import Home from './Pages/Home'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
<div>
  <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
  </BrowserRouter>
</div>
  );
}

export default App;
