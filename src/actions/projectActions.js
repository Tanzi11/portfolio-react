export const getProjects = () => {
  return dispatch => {
    return (  fetch("http://localhost:3001/projects")
      .then(response => response.json())
      .then(data=>dispatch({type: "ADD_PROJECTS", payload: data })))
  }
}
