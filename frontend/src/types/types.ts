// Interface de types pour le state de l'application (appelé dans les composants à l'aide de useSelector)
export interface AppState {
  login: {
    isLoggedIn: boolean
    token: string
    error: string
  }
  user: {
    firstName: string
    lastName: string
    userName: string
    error: string
  }
}
