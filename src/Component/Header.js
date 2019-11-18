import React, { Component } from 'react';
import Navigation from '../component/Navigation'


const Header = () => {
    return (
      <React.Fragment>
      <header id="home">
      <nav id="nav-wrap">
       <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
       <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
         <Navigation />
       {/* end #nav */}
     </nav> {/* end #nav-wrap */}
     <div className="row banner">
       <div className="banner-text">
         <h1 className="responsive-headline">Tanzima Chowdhury</h1>
         <h3>I am a <span>writer</span>, <span>thinker</span> and <span>artist</span> creating awesome and
           effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
           and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
         <hr />
         <ul className="social">
           <li><a href="#"><i className="fa fa-facebook" /></a></li>
           <li><a href="#"><i className="fa fa-twitter" /></a></li>
           <li><a href="#"><i className="fa fa-google-plus" /></a></li>
           <li><a href="#"><i className="fa fa-linkedin" /></a></li>
           <li><a href="#"><i className="fa fa-instagram" /></a></li>
           <li><a href="#"><i className="fa fa-dribbble" /></a></li>
           <li><a href="#"><i className="fa fa-skype" /></a></li>
         </ul>
       </div>
     </div>
     <p className="scrolldown">
       <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
     </p>
      </header>
      </React.Fragment>
    );
  }


export default Header
