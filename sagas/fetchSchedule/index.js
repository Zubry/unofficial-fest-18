import { put } from 'redux-saga/effects'
import { groupBy } from 'ramda'

import { setSchedule } from '../../stores/data/actions'

export default function* fetchSchedule() {
  const schedule = yield fetch('https://api.thefestfl.com/fest18/events')
    .then(res => res.json())
    
  const scheduleByDay = groupBy(({ day }) => day, schedule)

  yield put(setSchedule(scheduleByDay))
}
