import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import About from './component/About';
import Resume from './component/Resume';
import ProjectList from './container/ProjectList'
import Contact from './container/Contact';
import {getProjects} from './actions/projectActions';
import {connect} from 'react-redux'

//component => action => reducer => store => component
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <h1>Welcome!</h1>} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={ProjectList} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
  </Router>
  );
}

export default App;
