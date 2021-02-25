import React from 'react';
import './header.css';

const Header = () => {
  return(
    <div className="header container">
      <div><a className="logo" href="/#">Montero</a></div>
      <ul className="nav-bar">
        <li><a href="/#" >Home</a></li>
        <li><a href="/#" >About</a></li>
        <li><a href="/#" >Contact</a></li>
      </ul>
    </div>  
  )
};

export default Header;