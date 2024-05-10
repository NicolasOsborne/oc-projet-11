import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import Footer from './components/Footer'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { alreadyLoggedIn } from './redux/features/login/loginSlice'
import { useEffect } from 'react'
import { AppState } from './types/types'

function App() {
  // Hook permettant d'envoyer les actions Redux
  const dispatch = useDispatch()

  // Récupération du state isLoggedIn pour vérifier si l'utilisateur est connecté ou non
  const isLoggedIn = useSelector((state: AppState) => state.login.isLoggedIn)

  // Récupérer le token enregistré dans le sessionStorage
  const token = sessionStorage.getItem('token')

  // Si le token est présent : envoit de l'action alreadyLoggedIn (pour gérer l'affichage du Header et du dashboard si l'utilsateur est connecté et qu'il actualise la page)
  useEffect(() => {
    if (token) {
      dispatch(alreadyLoggedIn())
    }
  }, [token, dispatch])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        {/* Afficher la page User seulement si isLoggedIn est true */}
        {isLoggedIn && <Route path='/user' element={<User />} />}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
