import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducer'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: { root: rootReducer },
})
export const useAppDispatch = () => useDispatch()
