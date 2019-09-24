import { SET_HEADER } from './actions'

const initialState = {
  title: 'Home',
}

export default function  headerApp(state = initialState, action) {
  switch (action.type) {
    case SET_HEADER:
      return {
        ...state,
        title: action.title
      }
    default: return state
  }
}
