export const FETCH_SCHEDULE = 'FETCH_SCHEDULE'
export const SET_SCHEDULE = 'SET_SCHEDULE'

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
