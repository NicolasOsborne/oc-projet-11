import { useSelector } from 'react-redux'
import SignInForm from '../components/SignInForm'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppState } from '../types/types'

// Component pour l'affichage de la page de connexion SignIn

const SignIn = () => {
  // Hook permettant de récupérer le state des données dans le store Redux (ici isLoggedIn)
  const isLoggedIn = useSelector((state: AppState) => state.login.isLoggedIn)

  // Hook permettant de programmer la navigation vers une autre page
  const navigate = useNavigate()

  // Hook pour gérer la redirection vers le dashboard /user si l'utilsateur est déjà connecté
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user')
    }
  }, [isLoggedIn, navigate])

  return (
    <main className='main bg-dark'>
      <SignInForm />
    </main>
  )
}

export default SignIn
