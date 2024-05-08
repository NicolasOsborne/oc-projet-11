import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import Footer from './components/Footer'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { alreadyLoggedIn } from './redux/features/login/loginSlice'

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)

  const token = sessionStorage.getItem('token')
  const dispatch = useDispatch()

  if (token) {
    dispatch(alreadyLoggedIn())
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        {isLoggedIn && <Route path='/user' element={<User />} />}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
