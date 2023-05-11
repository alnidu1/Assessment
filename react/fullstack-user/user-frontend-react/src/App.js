import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import User from './components/user';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';


function App(){
  return (
    <div>
      
      <Router>

<Navbar />

<Routes >
<Route path="/" element={ <Home /> } />
<Route path="/adduser" element={<AddUser />} />
<Route path="/user" element={ <User /> } />

</Routes>

</Router>
  </div>
  );
}



export default App;
