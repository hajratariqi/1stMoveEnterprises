import './App.css';
import Home from './/Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
