import * as actions from '../actions/projectActions';

const initialValues = {
  allProjects: [], error: ''
}

const projectReducer = (state = initialValues, action) => {
  switch (action.type) {
    case actions.GET_PROJECTS_SUCCESS:
      return { ...state, allProjects: action.payload }
    case actions.GET_PROJECTS_FAILURE:
      return { ...state, error: action.payload}
    case actions.ADD_PROJECT_SUCCESS:
      return { ...state, allProjects: state.allProjects.concat(action.payload) }
    case actions.ADD_PROJECT_FAILURE:
      return { ...state, error: action.payload}
    case actions.DELETE_PROJECT_SUCCESS:
      return {...state, allProjects: state.allProjects.filter(p => p.id !== action.payload)}
    case actions.DELETE_PROJECT_FAILURE:
      return {...state, error: action.payload}
    default: {
      return state
    }
  }
}

export default projectReducer;
