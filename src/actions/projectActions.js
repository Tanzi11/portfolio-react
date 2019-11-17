export const getProjects = () => {
  return dispatch => {dispatch({type: "ADD_PROJECTS"})
    return (fetch("http://localhost:3001/projects")
      .then(response => response.json())
      .then(data=>dispatch({type: "ADD_PROJECTS", payload: data })))
  }
}

export const postComments = () => {

}
