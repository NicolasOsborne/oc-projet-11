interface ButtonProps {
  buttonText: string
  buttonClass: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (buttonProps: ButtonProps) => {
  const { buttonClass, buttonText, onClick } = buttonProps
  return (
    <button className={buttonClass} onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default Button
