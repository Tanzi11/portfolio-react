import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <React.Fragment>
      <ul id="nav" class="nav">
         <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
         <li><a class="smoothscroll" href="#about">About</a></li>
        <li><a class="smoothscroll" href="#resume">Resume</a></li>
         <li><a class="smoothscroll" href="#portfolio">Projects</a></li>
         <li><a class="smoothscroll" href="#contact">Contact</a></li>
      </ul>
    </React.Fragment>
  )
}

export default Navigation
