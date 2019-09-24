export const SET_HEADER = 'SET_HEADER'

export function setHeader(title) {
  return {
    type: SET_HEADER,
    title,
  }
}
