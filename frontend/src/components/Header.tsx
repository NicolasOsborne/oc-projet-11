import Logo from '../assets/argentBankLogo.png'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
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
      <NavLink to='/sign-in' className='main-nav-item'>
        <i className='fa fa-user-circle'></i>
        {' Sign In '}
      </NavLink>
    </nav>
  )
}

export default Header
