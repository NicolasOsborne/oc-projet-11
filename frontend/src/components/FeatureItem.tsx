interface FeatureItemProps {
  featureIcon: string
  featureTitle: string
  featureText: string
}

const FeatureItem = (featureItemProps: FeatureItemProps) => {
  const { featureIcon, featureTitle, featureText } = featureItemProps
  return (
    <div className='feature-item'>
      <img src={featureIcon} alt='Chat Icon' className='feature-icon' />
      <h3 className='feature-item-title'>{featureTitle}</h3>
      <p>{featureText}</p>
    </div>
  )
}

export default FeatureItem
