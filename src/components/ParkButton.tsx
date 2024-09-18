import { MouseEventHandler } from 'react'
import { FloatingButton } from './FloatingButton.tsx'
import { Icon } from './Icon.tsx'

interface ParkButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function ParkButton({ onClick }: ParkButtonProps) {
  return (
    <FloatingButton
      className="fixed inset-x-0 bottom-16 z-10 mx-auto w-32 bg-violet-500"
      onClick={onClick}
      data-testid="ParkButton"
    >
      <Icon name="directions_car" />
      Park
    </FloatingButton>
  )
}
