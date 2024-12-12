import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <Link to ="/"><a>Home</a></Link>
      <Link to="About"><a>About Us</a></Link>
      <Link to="Services"><a>Services</a></Link>
      <Link to="Career"><a>Career</a></Link>
      <Link to="Contact"><a>Contact Us</a></Link>
      
    </div>
  )
}

export default Header