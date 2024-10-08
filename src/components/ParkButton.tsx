import { MouseEventHandler } from 'react'
import COLORS from '../config/colors'

interface ParkButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function ParkButton({ onClick }: ParkButtonProps) {
  return (
    <button
      className="floating-button _prevent-selection"
      style={{ backgroundColor: COLORS.PURPLE }}
      onClick={onClick}
      data-testid="ParkButton"
    >
      <i className="material-icons">directions_car</i>Park
    </button>
  )
}
