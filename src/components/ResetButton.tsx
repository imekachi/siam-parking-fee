import COLORS from '../config/colors'
import React, { MouseEventHandler } from 'react'

interface ResetButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <button
      className="floating-button"
      style={{ backgroundColor: COLORS.YELLOW }}
      onClick={onClick}
    >
      <i className="material-icons">delete</i>Reset
    </button>
  )
}
