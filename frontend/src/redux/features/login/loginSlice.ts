import { createSlice } from '@reduxjs/toolkit'
import login from './login'

const initialState = {
  isLoggedIn: false,
  token: null,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoggedIn = false
        state.token = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true
        state.token = action.payload.body.token
      })
      .addCase(login.rejected, (state) => {
        state.isLoggedIn = false
        state.token = null
      })
  },
})

export default loginSlice.reducer
