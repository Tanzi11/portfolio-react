import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from '../component/Project';
import {getProjects, addProject, deleteProject} from '../actions/projectActions';
import NewProject from './NewProject';

class ProjectList extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  componentDidMount() {
    this.props.getProjects();
  }

  toggleModal = () => {
    const {showModal} = this.state;
    this.setState({showModal: !showModal});
  }

  render() {
    const {allProjects, addProject, deleteProject} = this.props;
    const {showModal} = this.state;
    console.log('in component render', allProjects)
    return (
      <React.Fragment>
        <section id="portfolio">
          <button onClick={this.toggleModal}>Add project</button>
          {showModal && <NewProject showModal={showModal} addProject={addProject} toggleModal={this.toggleModal} />}
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
                {allProjects.map(project => <Project key={project.id} item={project} deleteProject={deleteProject} />)}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => dispatch(getProjects()),
    addProject: (data) => dispatch(addProject(data)),
    deleteProject: (id) => dispatch(deleteProject(id))
  }
}

const mapStateToProps = state => {
  return {
    allProjects: state.allProjects
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
