import { FloatingButton, FloatingButtonProps } from './FloatingButton.tsx'
import { Icon } from './Icon.tsx'

export type ResetButtonProps = Pick<FloatingButtonProps, 'onClick'>

export const ResetButton = (props: ResetButtonProps) => {
  const { onClick } = props

  return (
    <FloatingButton
      className="w-32"
      onClick={onClick}
      data-testid="ResetButton"
    >
      <Icon className="mr-1" name="delete" />
      Reset
    </FloatingButton>
  )
}
