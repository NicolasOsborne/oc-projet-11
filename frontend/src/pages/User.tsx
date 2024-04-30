import AccountCard from '../components/AccountCard'
import Button from '../components/Button'

const User = () => {
  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <Button buttonClass='edit-button' buttonText='Edit Name' />
      </div>
      <h2 className='sr-only'>Accounts</h2>
      <AccountCard
        accountTitle='Argent Bank Checking (x8349)'
        accountAmount='$2,082.79'
        accountDescription='Available Balance'
      />
      <AccountCard
        accountTitle='Argent Bank Savings (x6712)'
        accountAmount='$10,928.42'
        accountDescription='Available Balance'
      />
      <AccountCard
        accountTitle='Argent Bank Credit Card (x8349)'
        accountAmount='$184.30'
        accountDescription='Current Balance'
      />
    </main>
  )
}

export default User
