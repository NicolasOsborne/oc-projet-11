import { createSlice } from '@reduxjs/toolkit'
import login from './login'

const initialState = {
  isLoggedIn: false,
  token: null,
  error: null,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // loginSuccess(state, action) {
    //   state.isLoggedIn = true
    //   state.token = action.payload.body.token
    //   state.error = null
    // },
    // loginFailure(state, action) {
    //   state.isLoggedIn = false
    //   state.token = null
    //   state.error = action.payload.message
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoggedIn = false
        state.token = null
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true
        state.token = action.payload.body.token
        state.error = action.payload.message
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false
        state.token = null
        state.error = action.payload
      })
  },
})

// export const { loginSuccess, loginFailure } = loginSlice.actions
export default loginSlice.reducer
