import { createSlice } from '@reduxjs/toolkit'
import getProfile from './user'

const initialState = {
  email: null,
  firstName: null,
  lastName: null,
  userName: null,
  createdAt: null,
  updatedAt: null,
  id: null,
  loading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.email = action.payload.body.email
        state.firstName = action.payload.body.firstName
        state.lastName = action.payload.body.lastName
        state.userName = action.payload.body.userName
        state.createdAt = action.payload.body.createdAt
        state.updatedAt = action.payload.body.updatedAt
        state.id = action.payload.body.id
        state.loading = false
      })
      .addCase(getProfile.rejected, (state) => {
        state.loading = false
      })
  },
})

export default userSlice.reducer
