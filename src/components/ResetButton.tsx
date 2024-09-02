import { ComponentPropsWithoutRef } from 'react'

export type ResetButtonProps = Pick<
  ComponentPropsWithoutRef<'button'>,
  'onClick'
>

export const ResetButton = (props: ResetButtonProps) => {
  const { onClick } = props

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
