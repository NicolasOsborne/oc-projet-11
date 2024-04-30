interface ButtonProps {
  buttonText: string
  buttonClass: string
}

const Button = (buttonProps: ButtonProps) => {
  const { buttonClass, buttonText } = buttonProps
  return <button className={buttonClass}>{buttonText}</button>
}

export default Button
