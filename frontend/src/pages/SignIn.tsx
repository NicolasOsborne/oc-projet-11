import { useSelector } from 'react-redux'
import SignInForm from '../components/SignInForm'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)

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
