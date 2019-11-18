import React from 'react';

const Project = (props) => {
  const {title, image_link, id} = props.item;
  return (<div className="container">
            <div className="row col-sm-12">
              <div className="col-sm-5">
                <h1>{title}</h1>
              </div>
              <div className="col-sm-5">
                <img src={image_link} height="100px" width="200px" />
              </div>
              <div className="col-sm-2">
                <button onClick={() => props.deleteProject(id)}>Delete</button>
              </div>
            </div>
          </div>)
}

export default Project;
