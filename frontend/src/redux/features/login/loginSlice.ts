import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import login from './login'
import { LoginInitialState } from '../../../types/types'

// Redux slice pour gérer le state de login

// Définition du state initial de login slice
const initialState: LoginInitialState = {
  isLoggedIn: false,
  token: null,
  error: null,
}

// Création du slice
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // Définir les synchronous reducers et mettre à jour le state de user
    // Si l'utilsateur est déjà connecté
    alreadyLoggedIn(state) {
      state.isLoggedIn = true
    },
    // Pour gérer la déconnexion de l'utilisateur
    logoutSuccess(state) {
      state.isLoggedIn = false
      state.token = null
      state.error = null
      sessionStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    // Définir des extraReducers pour gérer le dispatch des actions de login thunk et mettre à jour le state
    builder
      // Pour le pending (chargement)
      .addCase(login.pending, (state) => {
        state.isLoggedIn = false
        state.token = null
        state.error = null
      })
      // Pour le fulfilled (succès)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true
        state.token = action.payload.body.token
        state.error = action.payload.message
        sessionStorage.setItem('token', state.token ?? '') // Utilisation de l'opérateur de coalescence des nuls ?? pour éviter une erreur dans le sessionStorage si token est null. Retourne state.token si il n'est pas null. Retourne "" si state.token est null.
      })
      // Pour le rejected (échec)
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoggedIn = false
        state.token = null
        state.error = action.payload
      })
  },
})

export const { alreadyLoggedIn, logoutSuccess } = loginSlice.actions
export default loginSlice.reducer
