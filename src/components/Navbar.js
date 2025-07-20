import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        📇 Contact Manager
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Add Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Contact List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
