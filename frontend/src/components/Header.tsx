import Logo from '../assets/argentBankLogo.webp'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)

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
          {isLoggedIn ? ' Tony ' : ' Sign In '}
        </NavLink>
        {isLoggedIn && (
          <NavLink to='/' className='main-nav-item'>
            <i className='fa fa-sign-out'></i>
            {' Sign Out '}
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Header
