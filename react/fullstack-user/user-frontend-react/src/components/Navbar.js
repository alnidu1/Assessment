import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
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
          <Link to="/user" className="nav-link">
            User
          </Link>
        </li>
       
      </ul>
    </nav>
  );
}

export default Navbar;