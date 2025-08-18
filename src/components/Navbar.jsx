import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  padding: '1rem 2rem',
  background: '#222',
  color: '#fff',
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.1rem',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'background 0.2s',
};

const Navbar = () => (
  <nav style={navStyle}>
    <Link to="/" style={linkStyle} onMouseOver={e => e.target.style.background = '#444'} onMouseOut={e => e.target.style.background = 'transparent'}>Home</Link>
    <Link to="/experience" style={linkStyle} onMouseOver={e => e.target.style.background = '#444'} onMouseOut={e => e.target.style.background = 'transparent'}>Experience</Link>
    <Link to="/contact" style={linkStyle} onMouseOver={e => e.target.style.background = '#444'} onMouseOut={e => e.target.style.background = 'transparent'}>Contact</Link>
  </nav>
);

export default Navbar;
