import { ComponentPropsWithoutRef } from 'react'

type ResetButtonProps = Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>

export const ResetButton = ({ onClick }: ResetButtonProps) => {
  return (
    <button
      className="flex h-16 w-32 items-center justify-center rounded-full bg-yellow font-bold uppercase leading-none text-black"
      onClick={onClick}
      data-testid="ResetButton"
    >
      <i className="material-icons mr-1">delete</i>Reset
    </button>
  )
}
