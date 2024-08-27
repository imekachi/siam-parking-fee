import { MouseEventHandler } from 'react'

type EditButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function EditButton({ onClick }: EditButtonProps) {
  return (
    <button
      className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow text-black"
      onClick={onClick}
    >
      <i className="material-icons">edit</i>
    </button>
  )
}
