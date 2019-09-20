import { combineReducers } from 'redux'

import dataApp from './data/reducer'
import viewApp from './view/reducer'

const festApp = combineReducers({
  dataApp,
  viewApp
})

export default festApp
