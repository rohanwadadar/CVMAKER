import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/app/portfolio">Portfolio</Link>
      <Link to="/app/about">About</Link>
      <Link to="/app/destination">Destination</Link>
    </div>
  );
};

export default Navbar;
