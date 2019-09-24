import React from 'react';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import saga from './sagas'
import festApp from './stores'

import Router from './Router'
import Header from './components/Header'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  festApp,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(saga)

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router />
    </Provider>
  );
}
