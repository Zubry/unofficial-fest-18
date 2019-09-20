import { takeEvery } from 'redux-saga/effects'

import fetchSchedule from './fetchSchedule'

export default function* saga() {
  yield takeEvery('FETCH_SCHEDULE', fetchSchedule)
}
