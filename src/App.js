import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Navbar from './components/layouts/Navbar';
import Favorites from './components/notes/Favorites';
import NoteDetails from './components/notes/NoteDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/favorites" element={<Favorites/>}/>
          <Route exact path="/note/:id" element={<NoteDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
