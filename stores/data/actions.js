export const FETCH_SCHEDULE = 'FETCH_SCHEDULE'
export const SET_SCHEDULE = 'SET_SCHEDULE'

export const FETCH_BAND = 'FETCH_BAND'
export const SET_BAND = 'SET_BAND'

export function fetchSchedule() {
  return {
    type: FETCH_SCHEDULE
  }
}

export function setSchedule(schedule) {
  return {
    type: SET_SCHEDULE,
    schedule
  }
}

export function fetchBand(id) {
  return {
    type: FETCH_BAND,
    id
  }
}

export function setBand(band) {
  return {
    type: SET_BAND,
    band
  }
}
