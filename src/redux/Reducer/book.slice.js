import {
  current,
  PayloadAction,
  AsyncThunk,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import http from '../../utils/http'
import axios from 'axios'

export const getProduct = createAsyncThunk(
  'book/getProduct',
  async (_, thunkAPI) => {
    const response = await http.get('getAll_books', {
      signal: thunkAPI.signal,
    })
    return response.data
  }
)

const bookSlice = createSlice({
  name: 'book',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state = action.payload
      return state
    })
  },
})

export default bookSlice.reducer
