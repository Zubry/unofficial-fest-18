import { combineReducers } from 'redux'

import dataApp from './data/reducer'
import viewApp from './view/reducer'
import headerApp from './header/reducer'

const festApp = combineReducers({
  dataApp,
  viewApp,
  headerApp
})

export default festApp
