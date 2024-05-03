import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const login = createAsyncThunk(
  'login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        userData
      )
      return response.data
    } catch (error) {
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
