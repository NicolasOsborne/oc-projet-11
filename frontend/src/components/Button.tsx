import { ButtonProps } from '../types/types'

// Component pour gérer les boutons (l'apparence et leur action)

const Button = (buttonProps: ButtonProps) => {
  // Déstructuration des props pour extraire les props nécessaires (buttonClass, buttonText et onClick)
  const { buttonClass, buttonText, onClick } = buttonProps
  return (
    <button className={buttonClass} onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default Button
