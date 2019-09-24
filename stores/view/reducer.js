import { SET_VIEW } from './actions'

const initialState = {
  route: 'schedule',
  params: {
    day: 3
  }
}

export default function dataApp(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW:
      return {
        ...state,
        route: action.route,
        params: action.params || {},
      }
    default: return state
  }
}
