import React from 'react';
import { groupBy } from 'ramda'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import saga from './sagas'
import festApp from './stores'

import Schedule from './components/Schedule'
import ScheduleData from './schedule.json'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  festApp,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(saga)

const schedule = groupBy(({ day }) => day, ScheduleData)

const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'FETCH_SCHEDULE' })

export default function App() {
  return (
    <Schedule schedule={schedule['1']} day={1} />
  );
}
