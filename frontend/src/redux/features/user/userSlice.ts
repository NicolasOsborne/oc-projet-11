import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { editProfile, getProfile } from './user'
import { UserInitialState } from '../../../types/types'

// Redux slice pour gérer le state de user

// Définition du state initial de user slice
const initialState: UserInitialState = {
  firstName: null,
  lastName: null,
  userName: null,
  error: null,
}

// Création du slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Définir des extraReducers pour gérer le dispatch des actions de user thunk et mettre à jour le state
    builder
      // Pour getProfile (récupérer les données)
      // Pour le pending (chargement)
      .addCase(getProfile.pending, (state) => {
        state.error = null
      })
      // Pour le fulfilled (succès)
      .addCase(getProfile.fulfilled, (state, action) => {
        state.firstName = action.payload.body.firstName
        state.lastName = action.payload.body.lastName
        state.userName = action.payload.body.userName
        state.error = action.payload.message
      })
      // Pour le rejected (échec)
      .addCase(getProfile.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
      })

      // Pour editProfile (modifier les données)
      // Pour le pending (chargement)
      .addCase(editProfile.pending, (state) => {
        state.error = null
      })
      // Pour le fulfilled (succès)
      .addCase(editProfile.fulfilled, (state, action) => {
        state.userName = action.payload.body.userName
        state.error = action.payload.message
      })
      // Pour le rejected (échec)
      .addCase(editProfile.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload
      })
  },
})

export default userSlice.reducer
