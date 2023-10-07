import { combineReducers } from 'redux'

import { sortReducer } from './sortReducer'
import { checkboxReducer } from './checkboxReducer'

export const rootReducer = combineReducers({
  sort: sortReducer,
  check: checkboxReducer,
})
