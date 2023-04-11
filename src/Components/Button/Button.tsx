import styles from "@/Styles/Button/button.module.scss"

export interface IButtonProps {
  primary?: boolean
  value: string
  customStyles?: { [id: string]: string }
  onClick?: () => void
  usePrimaryColor?: boolean
}

export function Button({
  primary,
  value,
  customStyles,
  onClick,
  usePrimaryColor,
}: IButtonProps) {
  return (
    <button
      className={`
        ${primary ? styles.primary : styles.secondary} 
        ${usePrimaryColor ? styles.usePrimaryColor : ""}
      `}
      style={customStyles}
      onClick={onClick}
    >
      {value}
    </button>
  )
}
