import Button from './Button'

interface AccountDetails {
  accountTitle: string
  accountAmount: string
  accountDescription: string
}

const AccountCard = (accountDetails: AccountDetails) => {
  const { accountTitle, accountAmount, accountDescription } = accountDetails
  return (
    <section className='account'>
      <div className='account-content-wrapper'>
        <h3 className='account-title'>{accountTitle}</h3>
        <p className='account-amount'>{accountAmount}</p>
        <p className='account-amount-description'>{accountDescription}</p>
      </div>
      <div className='account-content-wrapper cta'>
        <Button
          buttonClass='transaction-button'
          buttonText='View transactions'
          // Fonction vide puisque les boutons ne renvoient pas vers les comptes pour l'instant
          onClick={() => {}}
        />
      </div>
    </section>
  )
}

export default AccountCard
