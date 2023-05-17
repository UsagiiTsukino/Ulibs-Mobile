import { combineReducers } from '@reduxjs/toolkit'

import userReducer from './user.slice'
import bookReducer from './book.slice'
import orderReducer from './order.slice'

const rootReducer = combineReducers({
  user: userReducer,
  book: bookReducer,
  order: orderReducer,
})

export default rootReducer
