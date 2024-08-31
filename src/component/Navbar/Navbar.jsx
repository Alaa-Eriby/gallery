
import React from 'react';
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li  className="navbar-brand"   ><a href="/">galleria.</a></li>
         <li className="navbarslid"><a href="/about">start slideshow</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
