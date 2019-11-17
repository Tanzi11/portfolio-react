export default function projectReducer(state={all_projects: []}, action) {
  switch (action.type) {
    case 'ADD_PROJECTS':
    // debugger
      return {
      ...state, payload: true
    }
    default: {
      return state
    }
  }
}
