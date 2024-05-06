import { useDispatch, useSelector } from 'react-redux'
import AccountCard from '../components/AccountCard'
import Button from '../components/Button'
import accountsData from '../data/accountsData.json'
import getProfile from '../redux/features/user/user'
import { useEffect, useState } from 'react'
import EditUserInfoForm from '../components/EditUserInfoForm'

const User = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const [isFormVisible, setIsFormVisible] = useState(false)
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible)
    console.log('Click')
  }

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}!
        </h1>
        <Button
          buttonClass='edit-button'
          buttonText='Edit Name'
          onClick={toggleFormVisibility}
        />
        {isFormVisible && <EditUserInfoForm isVisible={isFormVisible} />}
      </div>
      <h2 className='sr-only'>Accounts</h2>
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
