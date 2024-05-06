import { useSelector } from 'react-redux'

const EditUserInfoForm = ({ isVisible, hideForm }) => {
  const user = useSelector((state) => state.user)

  const handleHideForm = () => {
    hideForm(false)
  }

  const handleUpdateInfo = (e) => {
    e.preventDefault()
  }

  return (
    <form className='edit-user-info-form' onSubmit={handleUpdateInfo}>
      <div className='input-wrapper'>
        <label htmlFor='user-name'>User name:</label>
        <input
          type='text'
          id='user-name'
          placeholder={user.userName}
          //  onChange={(e) => setUserName(e.target.value)}
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
        <button className='edit-button' onClick={handleHideForm}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditUserInfoForm
