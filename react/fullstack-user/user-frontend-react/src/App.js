import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import User from './components/user';
import  SearchPage  from './components/SearchPage';

function App(){
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Router>
        <Navbar onSearchChange={handleSearchChange} searchQuery={searchQuery}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
