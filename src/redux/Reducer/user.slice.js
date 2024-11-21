import {
  current,
  PayloadAction,
  AsyncThunk,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit'

export const setUser = createAsyncThunk('user/setUser', (body, _) => {
  return body
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'default',
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setUser.fulfilled, (state, action) => {
      state = action.payload
      return state
    })
  },
})

export default userSlice.reducer
