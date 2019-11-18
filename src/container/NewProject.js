import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class NewProject extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      github_link: '',
      video_link: '',
      image_link: ''
    }
  }

  handleNewProject = e => {
    e.preventDefault();
    console.log('valuessss', this.state);
    this.props.addProject(this.state);
    this.props.toggleModal();
  }

  handleInputChange = e => this.setState({[e.target.name]: e.target.value})

  render() {
    const {showModal, toggleModal} = this.props;
    const {title, content, github_link, video_link, image_link} = this.state;
    return (
      <div>
      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        style={customStyles}
      >
        <h1>New Project Form</h1>
        <form onSubmit={this.handleNewProject}>
          <div>Title: <input required name="title" value={title} onChange={this.handleInputChange} /></div>
          <div>Content: <input required name="content" value={content} onChange={this.handleInputChange} /></div>
          <div>Github Link: <input required name="github_link" value={github_link} onChange={this.handleInputChange} /></div>
          <div>Video Link:<input required name="video_link" value={video_link} onChange={this.handleInputChange} /></div>
          <div>Image Link:<input required name="image_link" value={image_link} onChange={this.handleInputChange} /></div>
          <button>Submit</button>
        </form>
      </Modal>
      </div>
    )
  }
}
