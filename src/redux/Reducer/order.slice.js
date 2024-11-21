import {
  current,
  PayloadAction,
  AsyncThunk,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit'
export const addOrder = createAsyncThunk('order/addOrder', (body, _) => {
  return body
})
export const updateOrder = createAsyncThunk('order/updateOrder', (body, _) => {
  return body
})
const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addOrder.fulfilled, (state, action) => {
        const existingItem = state.find(
          (item) => item.productName === action.payload.productName
        )
        if (existingItem) {
          existingItem.quantity =
            parseInt(action.payload.quantity) + parseInt(existingItem.quantity)
        } else {
          state.push(action.payload)
        }
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state = action.payload
      })
  },
})

export default orderSlice.reducer
