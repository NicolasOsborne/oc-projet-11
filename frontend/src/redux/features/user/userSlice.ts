import { createSlice } from '@reduxjs/toolkit'
import { editProfile, getProfile } from './user'

const initialState = {
  firstName: null,
  lastName: null,
  userName: null,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.error = null
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.firstName = action.payload.body.firstName
        state.lastName = action.payload.body.lastName
        state.userName = action.payload.body.userName
        state.error = action.payload.message
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.error = action.payload.message
      })

      .addCase(editProfile.pending, (state) => {
        state.error = null
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.userName = action.payload.body.userName
        state.error = action.payload.message
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.error = action.payload.message
      })
  },
})

export default userSlice.reducer
