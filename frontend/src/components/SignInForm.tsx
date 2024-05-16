import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import login from '../redux/features/login/login'
import { AppState } from '../types/types'
import { Dispatch } from '@reduxjs/toolkit'

// Component du formulaire permettant à l'utilisateur de se connecter

const SignInForm = () => {
  // Hook permettant d'accéder à la fonction d'envoi d'actions Redux (dispatch)
  const dispatch: Dispatch<any> = useDispatch()

  // Déclaration des states pour les inputs du formulaire (email et mot de passe), ainsi que le state du message d'erreur de connexion
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Déclaration du state pour stocker la valeur du checkbox "Remember me"
  const [rememberMe, setRememberMe] = useState(false)

  // Récupérer le message d'erreur dans le store Redux
  const errorMessage = useSelector((state: AppState) => state.login.error)

  // Définir des règles regex pour sécuriser les inputs du formulaire
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9!&.?]{1,20}$/

  // Hook pour accéder aux identifiants de connexion stockés dans le localStorage si l'utilisateur a coché la case "Remember me"
  useEffect(() => {
    const storedLoginData = localStorage.getItem('rememberMe')
    // Si les identifiants sont sauvegardés, les states de email, password et rememberMe sont modifiés et attribués les valeurs récupérées
    if (storedLoginData) {
      const { email: storedEmail, password: storedPassword } =
        JSON.parse(storedLoginData)
      setEmail(storedEmail)
      setPassword(storedPassword)
      setRememberMe(true)
    }
  }, [])

  // Fonction pour gérer le submit du formulaire de connexion
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Vérifier que la valeur des inputs email et password respectent les règles regex
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
    }
    if (!passwordRegex.test(password)) {
      setError('Please enter a valid password')
    }
    // Récupérer les valeurs des inputs dans une variable userData
    const userData = { email, password }
    // Envoi de l'action login avec la valeur userData
    dispatch(login(userData))
    // Si l'utilisateur coche la case "Remember me", ses infomations sont sauvegardées dans le localStorage. Si la case est décochée, les informations potentiellement sauvegardées sont effacées
    if (rememberMe) {
      localStorage.setItem('rememberMe', JSON.stringify(userData))
    } else {
      localStorage.removeItem('rememberMe')
    }
  }

  // Hook pour mettre à jour le state du message d'erreur de connexion à afficher lorsque l'erreur récupérée par Redux change
  useEffect(() => {
    if (errorMessage) {
      setError(errorMessage)
    }
  }, [errorMessage])

  return (
    <section className='sign-in-content'>
      <i className='fa fa-user-circle sign-in-icon'></i>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <div className='input-wrapper'>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Le state de email est mis à jour avec la valeur saisie
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Le state de password est mis à jour avec la valeur saisie
          />
        </div>
        <div className='input-remember'>
          <input
            type='checkbox'
            id='remember-me'
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)} // Le state de rememberMe est mis à jour pour indiquer si la case est checked ou non
          />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        {errorMessage && <p className='error-message'>{error}</p>}
        <button className='sign-in-button' type='submit'>
          Sign In
        </button>
      </form>
    </section>
  )
}

export default SignInForm
