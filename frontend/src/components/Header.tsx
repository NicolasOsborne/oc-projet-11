import Logo from '../assets/argentBankLogo.webp'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutSuccess } from '../redux/features/login/loginSlice'
import { AppState } from '../types/types'

// Component Header pour l'affichage de la barre de navigation au sommet de la page

const Header = () => {
  // Hook permettant de récupérer le state des données dans le store Redux (ici isLoggedIn et userName)
  const isLoggedIn = useSelector((state: AppState) => state.login.isLoggedIn)
  const userName = useSelector((state: AppState) => state.user.userName)

  // Hook permettant de programmer la navigation vers une autre page
  const navigate = useNavigate()

  // Hook permettant d'accéder à la fonction d'envoi d'actions Redux (dispatch)
  const dispatch = useDispatch()

  // Fonction pour gérer la déconnexion de l'utilsateur
  const handleLogout = () => {
    // Envoi de l'action logoutSuccess
    dispatch(logoutSuccess())
    // Redirection vers la page de connexion une fois l'utilisateur déconnecté
    navigate('/login')
  }

  return (
    <nav className='main-nav'>
      {/* Lien vers la page d'accueil avec le logo d'Argent Bank */}
      <Link to='/' className='main-nav-logo'>
        <img
          className='main-nav-logo-image'
          src={Logo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>
        {/* Lien vers la page de connexion */}
        <NavLink to='/login' className='main-nav-item'>
          <i className='fa fa-user-circle'></i>
          {/* Si l'utilisateur est connecté, afficher son pseudo, sinon afficher "Sign In" */}
          {isLoggedIn ? `${' ' + userName}` : ' Sign In '}
        </NavLink>
        {/* Si l'utilisateur est connecté, afficher le lien de déconnexion "Sign Out", qui au clic déclenche l'action handleLogout et redirige vers la page de connexion */}
        {isLoggedIn && (
          <NavLink to='/login' className='main-nav-item' onClick={handleLogout}>
            <i className='fa fa-sign-out'></i>
            {' Sign Out '}
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Header
