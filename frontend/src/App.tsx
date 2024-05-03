import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import Footer from './components/Footer'
import Header from './components/Header'
import { useSelector } from 'react-redux'

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
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
