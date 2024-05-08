import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import login from '../redux/features/login/login'

const SignInForm = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [rememberMe, setRememberMe] = useState(false)

  const errorMessage = useSelector((state) => state.login.error)

  useEffect(() => {
    const storedLoginData = localStorage.getItem('rememberMe')
    if (storedLoginData) {
      const { email: storedEmail, password: storedPassword } =
        JSON.parse(storedLoginData)
      setEmail(storedEmail)
      setPassword(storedPassword)
      setRememberMe(true)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    const userData = { email, password }
    dispatch(login(userData))
    if (rememberMe) {
      localStorage.setItem('rememberMe', JSON.stringify(userData))
    } else {
      localStorage.removeItem('rememberMe')
    }
  }

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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='input-remember'>
          <input
            type='checkbox'
            id='remember-me'
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
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
