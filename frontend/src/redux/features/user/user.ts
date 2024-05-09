import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProfile = createAsyncThunk('user/getProfile', async () => {
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

export const editProfile = createAsyncThunk(
  'user/editProfile',
  async (userName: string) => {
    const response = await axios.put(
      'http://localhost:3001/api/v1/user/profile',
      {
        userName: userName,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      }
    )
    return response.data
  }
)
