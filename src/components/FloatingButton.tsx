import { ComponentPropsWithoutRef } from 'react'
import { cn } from '../utils/cn.ts'
import { WithDataTestId } from './components.types.ts'

export type FloatingButtonProps = ComponentPropsWithoutRef<'button'> &
  WithDataTestId

export const FloatingButton = (props: FloatingButtonProps) => {
  const { className, ...restProps } = props

  return (
    <button
      className={cn(
        'flex h-16 w-16 items-center justify-center rounded-full bg-amber-300 font-bold uppercase leading-none text-black',
        className,
      )}
      {...restProps}
    />
  )
}
