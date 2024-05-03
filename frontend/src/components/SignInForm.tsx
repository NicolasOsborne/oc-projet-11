import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import login from '../redux/features/login/login'

const SignInForm = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
  const errorMessage = useSelector((state) => state.login.error)

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const userData = { email, password }
    dispatch(login(userData))
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user')
    }
  }, [isLoggedIn, navigate])

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
          <label htmlFor='email'>Username</label>
          <input
            type='text'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me' />
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
