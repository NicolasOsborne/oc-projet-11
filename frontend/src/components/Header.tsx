import Logo from '../assets/argentBankLogo.webp'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutSuccess } from '../redux/features/login/loginSlice'
import { AppState } from '../types/types'

const Header = () => {
  const isLoggedIn = useSelector((state: AppState) => state.login.isLoggedIn)
  const userName = useSelector((state: AppState) => state.user.userName)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutSuccess())
    navigate('/sign-in')
  }

  return (
    <nav className='main-nav'>
      <Link to='/' className='main-nav-logo'>
        <img
          className='main-nav-logo-image'
          src={Logo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>
        <NavLink to='/sign-in' className='main-nav-item'>
          <i className='fa fa-user-circle'></i>
          {isLoggedIn ? `${' ' + userName}` : ' Sign In '}
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to='/sign-in'
            className='main-nav-item'
            onClick={handleLogout}
          >
            <i className='fa fa-sign-out'></i>
            {' Sign Out '}
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Header
