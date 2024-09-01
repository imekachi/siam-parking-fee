import { ComponentPropsWithoutRef } from 'react'

type EditButtonProps = Pick<
  ComponentPropsWithoutRef<'button'>,
  'onClick' | 'disabled'
>

export default function EditButton({ onClick, disabled }: EditButtonProps) {
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
