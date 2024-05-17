import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/login/loginSlice'
import userReducer from './features/user/userSlice'
import storage from 'redux-persist/lib/storage'
import { PERSIST, persistReducer, persistStore, REHYDRATE } from 'redux-persist'

// Configuration du store Redux

// Configuration du persist du state de login
const loginPersistConfig = {
  key: 'login', // Clé unique pour le login slice
  storage, // Espace de sauvegarde des données persist (ici le localStorage)
}

// Configuration du persist du state de user
const userPersistConfig = {
  key: 'user', // Clé unique pour le user slice
  storage, // Espace de sauvegarde des données persist (ici le localStorage)
}

// Combiner le loginReducer avec le persistReducer pour y appliquer le persistConfig
const loginPersistedReducer = persistReducer(loginPersistConfig, loginReducer)
// Combiner le userReducer avec le persistReducer pour y appliquer le persistConfig
const userPersistedReducer = persistReducer(userPersistConfig, userReducer)

// Création du store Redux
const store = configureStore({
  reducer: {
    // Combiner les reducers des slices login et user
    login: loginPersistedReducer,
    user: userPersistedReducer,
  },
  // Activer l'utilisation de l'extension Redux DevTools
  devTools: true,
  // Configuration du middleware pour gérer la vérification de sérialisation de certaines actions (permet de corriger des erreurs de console liées à l'utilisation de Redux-Persist)
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
