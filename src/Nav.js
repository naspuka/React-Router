import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'; 

function Nav() {
  const navStyle ={
      color: 'white'
  };

  return (
    <nav>
        <h2>Logo</h2>
        <ul className='nav-links'>
            <Link style ={navStyle} to ='/about'>
                <li><b>About</b></li>
            </Link>
            <Link style = {navStyle} to ='/shop'>
                <li><b>Shop</b></li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
