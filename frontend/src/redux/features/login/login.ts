import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const login = createAsyncThunk(
  'login',
  async (
    userData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        userData
      )
      return response.data
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        return rejectWithValue(error.response.data.message)
      }
      return rejectWithValue('An unexpected error occurred')
    }
  }
)

export default login
