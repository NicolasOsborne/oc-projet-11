import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/login/loginSlice'
import userReducer from './features/user/userSlice'
import storage from 'redux-persist/lib/storage'
import { PERSIST, persistReducer, persistStore, REHYDRATE } from 'redux-persist'

const loginPersistConfig = {
  key: 'login',
  storage,
}

const userPersistConfig = {
  key: 'user',
  storage,
}

const loginPersistedReducer = persistReducer(loginPersistConfig, loginReducer)
const userPersistedReducer = persistReducer(userPersistConfig, userReducer)

const store = configureStore({
  reducer: {
    login: loginPersistedReducer,
    user: userPersistedReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Correction d'une erreur dans la console liée à la vérification de sérialisation des données, en ignorant ces actions.
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }),
})

const persistor = persistStore(store)

export { store, persistor }
