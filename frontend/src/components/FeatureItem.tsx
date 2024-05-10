import { FeatureItemProps } from '../types/types'

// Component affichant une seule Feature avec une icône, un titre et une description

const FeatureItem = (featureItemProps: FeatureItemProps) => {
  // Déstructuration des props pour extraire les props nécessaires (featureIcon, featureTitle et featureText)
  const { featureIcon, featureTitle, featureText } = featureItemProps
  return (
    <div className='feature-item'>
      <img src={featureIcon} alt='Feature Icon' className='feature-icon' />
      <h3 className='feature-item-title'>{featureTitle}</h3>
      <p>{featureText}</p>
    </div>
  )
}

export default FeatureItem
