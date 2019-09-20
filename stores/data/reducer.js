import { FETCH_SCHEDULE, SET_SCHEDULE } from './actions'

const initialState = {
  schedule: null
}

export default function dataApp(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case FETCH_SCHEDULE:
      return state
    case SET_SCHEDULE:
      console.log(action.schedule)
      return {
        ...state,
        schedule: action.schedule
      }
    default: return state
  }
}
