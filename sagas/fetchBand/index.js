import { put } from 'redux-saga/effects'

import { setBand } from '../../stores/data/actions'

export default function* fetchBand(action) {
  const band = yield fetch(`https://admin.thefestfl.com/fest18/wp-json/wp/v2/performers/${action.id}`)
    .then(res => res.json())

  yield put(setBand(band))
}
