import {
  current,
  PayloadAction,
  AsyncThunk,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {},
  extraReducers(builder) {},
})

export const { increment, decrement } = orderSlice.actions

export default orderSlice.reducer
