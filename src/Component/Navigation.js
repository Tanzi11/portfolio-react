import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <React.Fragment>
      <ul id="nav" className="nav">
        <nav>
         <li className="current"><Link className="smoothscroll" to="/">Home</Link></li>
         <li><Link className="smoothscroll" to="/about">About</Link></li>
        <li><Link className="smoothscroll" to="/resume">Resume</Link></li>
         <li><Link className="smoothscroll" to="/portfolio">Projects</Link></li>
         <li><Link className="smoothscroll" to="/contact">Contact</Link></li>
         </nav>
    </ul>
    </React.Fragment>
  )
}

export default Navigation
