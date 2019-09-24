import { FETCH_SCHEDULE, SET_SCHEDULE, FETCH_BAND, SET_BAND } from './actions'

const initialState = {
  schedule: null,
  band: {}
}

export default function dataApp(state = initialState, action) {
  switch (action.type) {
    case FETCH_SCHEDULE:
      return { ...state }
    case SET_SCHEDULE:
      return {
        ...state,
        schedule: action.schedule
      }
    case FETCH_BAND:
      return { ...state }
    case SET_BAND:
      return {
        ...state,
        band: {
          ...state.band,
          [parseInt(action.band.id, 10)]: action.band
        }
      }
    default: return state
  }
}
