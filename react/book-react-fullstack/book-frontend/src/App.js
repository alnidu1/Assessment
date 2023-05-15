import './App.css';
import AddBook from './Component/AddBook';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/NavBar';


function App() {
  return (
    <div>
      <Router>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addbook" element={<AddBook />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
