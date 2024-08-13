import { MouseEventHandler } from 'react'
import COLORS from '../config/colors'

interface ResetButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <button
      className="floating-button"
      style={{ backgroundColor: COLORS.YELLOW }}
      onClick={onClick}
      data-testid="ResetButton"
    >
      <i className="material-icons">delete</i>Reset
    </button>
  )
}
