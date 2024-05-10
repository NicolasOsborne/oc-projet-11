import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Action creator pour gérer la connexion de l'utilisateur via la requête POST à l'API

const login = createAsyncThunk(
  // Nom de l'action type
  'login',
  // Fonction asynchrone à appeler lorsque l'action est dispatched
  async (
    // Accepte l'argument userData
    userData: { email: string; password: string },
    // Second argument pour gérer les erreurs
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        userData
      )
      // Retourne les données en cas de succès
      return response.data
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // Si l'erreur a une response, data et message : rejet de l'action avec le message d'erreur provenant du serveur
        return rejectWithValue(error.response.data.message)
      }
      // Si l'erreur n'est pas gérée spécifiquement, rejeter l'action avec un message d'erreur générique
      return rejectWithValue('An unexpected error occurred')
    }
  }
)

export default login
