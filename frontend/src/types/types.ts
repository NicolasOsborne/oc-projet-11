// Interface de types pour le state de l'application (appelé dans les composants à l'aide de useSelector)
export interface AppState {
  login: {
    isLoggedIn: boolean
    error: string
  }
  user: {
    firstName: string
    lastName: string
    userName: string
  }
}
