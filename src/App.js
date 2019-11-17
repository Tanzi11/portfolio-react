import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Navigation from './container/Navigation';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Component/Header';
import About from './Component/About';
import Resume from './Component/Resume';
import Project from './container/Project'
import Contact from './container/Contact';
import {getProjects} from './actions/projectActions';
import {connect} from 'react-redux'

const App = () => {
  function componentDidMount() {
    debugger
    this.props.getProjects()
  }
  return (
    <Router>
    <div>
      <Header />
      <Route exact path="/" component={About} />
      <Route exact path="/" component={Resume} />
      <Route exact path="/" component={Project} />
      <Route exact path="/" component={Contact} />
    </div>
  </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    all_projects: state.all_projects
  };
};

export default connect(mapStateToProps,{getProjects})(App)
