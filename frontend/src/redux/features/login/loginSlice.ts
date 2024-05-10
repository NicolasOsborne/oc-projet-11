import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import login from './login'
import { LoginInitialState } from '../../../types/types'

const initialState: LoginInitialState = {
  isLoggedIn: false,
  token: null,
  error: null,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    alreadyLoggedIn(state) {
      state.isLoggedIn = true
    },
    logoutSuccess(state) {
      state.isLoggedIn = false
      state.token = null
      state.error = null
      sessionStorage.removeItem('token')
    },
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
        sessionStorage.setItem('token', state.token ?? '') // Utilisation de l'opérateur de coalescence des nuls ?? pour éviter une erreur dans le sessionStorage si token est null. Retourne state.token si il n'est pas null. Retourne "" si state.token est null.
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoggedIn = false
        state.token = null
        state.error = action.payload
      })
  },
})

export const { alreadyLoggedIn, logoutSuccess } = loginSlice.actions
export default loginSlice.reducer
