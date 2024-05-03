import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/login/loginSlice'

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  devTools: true,
})

export default store
