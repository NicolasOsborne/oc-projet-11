import ChatIcon from '../assets/icon-chat.webp'
import MoneyIcon from '../assets/icon-money.webp'
import SecurityIcon from '../assets/icon-security.webp'
import FeatureItem from './FeatureItem'

// Component affichant la section contenant les trois features de la page d'accueil

const Features = () => {
  return (
    <section className='features'>
      <h2 className='sr-only'>Features</h2>
      <FeatureItem
        featureIcon={ChatIcon}
        featureTitle='You are our #1 priority'
        featureText='Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.'
      />
      <FeatureItem
        featureIcon={MoneyIcon}
        featureTitle='More savings means higher rates'
        featureText='The more you save with us, the higher your interest rate will be!'
      />
      <FeatureItem
        featureIcon={SecurityIcon}
        featureTitle='Security you can trust'
        featureText='We use top of the line encryption to make sure your data and money is
          always safe.'
      />
    </section>
  )
}

export default Features
