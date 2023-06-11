import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Products from './Products';
import About from './About';

const Navbar = () => (
  <Router>
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
        </div>
        <div className="navbar-links">
          <ul className="links">
          <li><Link to="/products">🌟 MG APPS 🌟</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default Navbar;
