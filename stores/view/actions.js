export const SET_VIEW = 'SET_VIEW'

export function setView(route, params) {
  return {
    type: SET_VIEW,
    route,
    params
  }
}
