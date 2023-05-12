import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onSearchChange, onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearchChange(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchQuery);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/adduser" className="nav-link">
            AddUser
          </Link>
        </li>

        <li className="nav-item">
        <Link to="search" className="nav-link">
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
