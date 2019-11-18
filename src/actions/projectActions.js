export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';

export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

export const getProjects = () => {
  return dispatch => {
    return fetch("http://localhost:3001/projects")
      .then(response => response.json())
      .then(data => dispatch({type: GET_PROJECTS_SUCCESS, payload: data }))
      .catch(err => dispatch({type: GET_PROJECTS_FAILURE, payload: 'Unable to fetch projects'}))
  }
}

export const addProject = projectData => {
  return dispatch => {
    return fetch("http://localhost:3001/projects", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectData)
    })
      .then(response => response.json())
      .then(data => dispatch({type: ADD_PROJECT_SUCCESS, payload: data }))
      .catch(err => dispatch({type: ADD_PROJECT_FAILURE, payload: 'Unable to add project'}))
  }
}

export const deleteProject = id => {
  return dispatch => {
    return fetch(`http://localhost:3001/projects/${id}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => dispatch({type: DELETE_PROJECT_SUCCESS, payload: id }))
      .catch(err => dispatch({type: DELETE_PROJECT_FAILURE, payload: 'Unable to delete project'}))
  }
}

export const postComments = () => {

}
