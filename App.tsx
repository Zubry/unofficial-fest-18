import React from 'react';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import saga from './sagas'
import festApp from './stores'

import Schedule from './components/Schedule'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  festApp,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(saga)

export default function App() {
  return (
    <Provider store={store}>
      <Schedule day="1" />
    </Provider>
  );
}
