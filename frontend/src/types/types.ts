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

// Interface de types pour initialState de userSlice
export interface UserInitialState {
  firstName: null | string
  lastName: null | string
  userName: null | string
  error: null | string
}

// Interface de types pour initialState de loginSlice
export interface LoginInitialState {
  isLoggedIn: boolean
  token: null | string
  error: null | string
}

// Interface de types pour les informations affichées sur chauque AccountCard
export interface AccountDetails {
  accountTitle: string
  accountAmount: string
  accountDescription: string
}

// Interface de types pour le composant Button
export interface ButtonProps {
  buttonText: string
  buttonClass: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// Interface de types pour EditUserInfoForm
export interface EditUserInfoFormProps {
  cancelForm: (isVisible: boolean) => void
}

// Interface de types pour FeatureItem
export interface FeatureItemProps {
  featureIcon: string
  featureTitle: string
  featureText: string
}
