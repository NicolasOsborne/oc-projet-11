import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/login/loginSlice'
import userReducer from './features/user/userSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const loginPersistedReducer = persistReducer(persistConfig, loginReducer)
const userPersistedReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
  reducer: {
    login: loginPersistedReducer,
    user: userPersistedReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializablecheck: false,
    }),
})

const persistor = persistStore(store)

export { store, persistor }
