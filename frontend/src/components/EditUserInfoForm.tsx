import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editProfile } from '../redux/features/user/user'

const EditUserInfoForm = ({ isVisible, cancelForm }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const [userName, setUserName] = useState('')

  const handleCancelForm = () => {
    cancelForm(false)
  }

  const handleEditProfile = (e) => {
    e.preventDefault()
    dispatch(editProfile(userName))
  }

  return (
    <form className='edit-user-info-form' onSubmit={handleEditProfile}>
      <div className='input-wrapper'>
        <label htmlFor='user-name'>User name:</label>
        <input
          type='text'
          id='user-name'
          placeholder={user.userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='first-name'>First name:</label>
        <input
          type='text'
          id='first-name'
          placeholder={user.firstName}
          disabled
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='last-name'>Last name:</label>
        <input
          type='text'
          id='last-name'
          placeholder={user.lastName}
          disabled
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
