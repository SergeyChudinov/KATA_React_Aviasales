import { combineReducers } from 'redux'

import { sortReducer } from './sortReducer'
import { checkboxReducer } from './checkboxReducer'
import { ticketsReducer } from './ticketsReducer'

export const rootReducer = combineReducers({
  sort: sortReducer,
  check: checkboxReducer,
  tickets: ticketsReducer,
})
