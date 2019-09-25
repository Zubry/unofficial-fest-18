import { SET_VIEW } from './actions'

const initialState = {
  route: 'band',
  params: {
    id: 19619
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
