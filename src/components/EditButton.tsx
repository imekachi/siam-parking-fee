import { ComponentPropsWithoutRef } from 'react'

export type EditButtonProps = Pick<
  ComponentPropsWithoutRef<'button'>,
  'onClick' | 'disabled'
>

export const EditButton = (props: EditButtonProps) => {
  const { onClick, disabled } = props
  
  return (
    <button
      className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow text-black"
      onClick={onClick}
      disabled={disabled}
    >
      <i className="material-icons">edit</i>
    </button>
  )
}
