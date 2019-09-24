import { takeEvery } from 'redux-saga/effects'

import fetchSchedule from './fetchSchedule'
import fetchBand from './fetchBand'

export default function* saga() {
  yield takeEvery('FETCH_SCHEDULE', fetchSchedule)
  yield takeEvery('FETCH_BAND', fetchBand)
}
