import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="navbar-brand">
        <strong>GitHub</strong> search
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Main
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/info" className="nav-link">
            Info
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
