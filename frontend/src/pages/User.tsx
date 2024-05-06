import AccountCard from '../components/AccountCard'
import Button from '../components/Button'
import accountsData from '../data/accountsData.json'

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
