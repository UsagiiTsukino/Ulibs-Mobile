import {
  current,
  PayloadAction,
  AsyncThunk,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit'

export const getUser = createAsyncThunk('getUser', async (_, thunkAPI) => {
  const response = await http.get('getAll_books', {
    signal: thunkAPI.signal,
  })
  return response.data
})

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.postList = action.payload
    })
  },
})

export const { increment, decrement } = userSlice.actions

export default userSlice.reducer
