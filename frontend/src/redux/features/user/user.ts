import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Action creator pour gérer la récupération des informations de l'utilsateur via la requête POST à l'API

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

// Action creator pour gérer la modification des informations de l'utilsateur (userName) via la requête PUT à l'API

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
