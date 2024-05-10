import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editProfile } from '../redux/features/user/user'
import { AppState, EditUserInfoFormProps } from '../types/types'
import { Dispatch } from '@reduxjs/toolkit'

// Formulaire de modification du pseudo de l'utilisateur

const EditUserInfoForm = ({ cancelForm }: EditUserInfoFormProps) => {
  // Hook permettant d'envoyer les actions Redux
  const dispatch: Dispatch<any> = useDispatch()

  // Hook permettant de récupérer les données dans le store Redux (ici les données concernant user)
  const user = useSelector((state: AppState) => state.user)

  // Déclaration du state pour l'input du formulaire pour le pseudo (userName) de l'utilisateur
  const [userName, setUserName] = useState('')

  // Fonction pour gérer l'annulation de la modification via le formulaire (et sa fermeture)
  const handleCancelForm = () => {
    cancelForm(false)
  }

  // Fonction pour gérer le submit du formulaire de modification du userName
  const handleEditProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Envoi (dispatch) de l'action editProfile avec la valeur de l'input userName
    dispatch(editProfile(userName))
  }

  return (
    <form className='edit-user-info-form' onSubmit={handleEditProfile}>
      <div className='input-wrapper'>
        <label htmlFor='user-name'>User name:</label>
        <input
          type='text'
          id='user-name'
          placeholder={user.userName} // Affiche le pseudo actuel
          onChange={(e) => setUserName(e.target.value)} // Le state de userName est mis à jour avec la valeur de l'input lorsque l'utilisateur saisit un nouveau pseudo
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='first-name'>First name:</label>
        <input
          type='text'
          id='first-name'
          placeholder={user.firstName} // Affiche le prénom de l'utilisateur
          disabled // L'utilisateur ne peut pas modifier son prénom
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='last-name'>Last name:</label>
        <input
          type='text'
          id='last-name'
          placeholder={user.lastName} // Affiche le nom de l'utilisateur
          disabled // L'utilisateur ne peut pas modifier son nom
        />
      </div>
      {/* {errorMessage && <p className='error-message'>{error}</p>} */}
      <div className='edit-form-buttons'>
        <button className='edit-button' type='submit'>
          Save
        </button>
        <button className='edit-button' onClick={handleCancelForm}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditUserInfoForm
