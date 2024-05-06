import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getProfile = createAsyncThunk('user/getProfile', async () => {
  const response = await axios.post(
    'http://localhost:3001/api/v1/user/profile',
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  )
  return response.data
})

export default getProfile
