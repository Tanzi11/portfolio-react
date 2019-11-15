import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Navigation from './container/Navbar';
import Header from './Component/Header';
import About from './Component/About';
import Resume from './Component/Resume';
import Project from './container/Project'
import Contact from './container/Contact';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
