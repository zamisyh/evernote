import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
