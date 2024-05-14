import { useDispatch, useSelector } from 'react-redux'
import AccountCard from '../components/AccountCard'
import Button from '../components/Button'
import accountsData from '../data/accountsData.json'
import { getProfile } from '../redux/features/user/user'
import { useEffect, useState } from 'react'
import EditUserInfoForm from '../components/EditUserInfoForm'
import { AppState } from '../types/types'
import { Dispatch } from '@reduxjs/toolkit'

// Component pour l'affichage du dashboard de l'utilsateur User

const User = () => {
  // Hook permettant d'accéder à la fonction d'envoi d'actions Redux (dispatch)
  const dispatch: Dispatch<any> = useDispatch()

  // Hook permettant de récupérer les données dans le store Redux (ici les données concernant user)
  const user = useSelector((state: AppState) => state.user)

  // Déclaration du state pour gérer l'affichage ou non du formulaire d'édition du pseudo de l'utilisateur
  const [isFormVisible, setIsFormVisible] = useState(false)

  // Fonction pour basculer l'affichage du formulaire d'édition (visible ou caché)
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible)
  }

  // Hook pour envoyer l'action getProfile pour récupérer les informations de l'utilisateur à afficher
  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}!
        </h1>
        {/* Bouton pour afficher ou cacher le formulaire d'édition du pseudo */}
        <Button
          buttonClass='edit-button'
          buttonText='Edit Name'
          onClick={toggleFormVisibility}
        />
        {/* Si le state du formulaire est visible, afficher le component du formulaire */}
        {isFormVisible && <EditUserInfoForm isVisible={toggleFormVisibility} />}
      </div>
      <h2 className='sr-only'>Accounts</h2>
      {/* Afficher les comptes */}
      {accountsData.map((accountData) => {
        return (
          <AccountCard
            key={accountData.id}
            accountTitle={accountData.title}
            accountAmount={accountData.amount}
            accountDescription={accountData.description}
          />
        )
      })}
    </main>
  )
}

export default User
