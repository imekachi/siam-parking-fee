import { ComponentPropsWithoutRef } from 'react'
import { cn } from '../utils/cn.ts'

export type IconProps = Omit<ComponentPropsWithoutRef<'i'>, 'children'> & {
  /**
   * The name of the icon to display.
   * @see https://fonts.google.com/icons
   */
  name: string
}

export const Icon = (props: IconProps) => {
  const { className, name, ...restProps } = props

  return (
    <i className={cn('material-icons', className)} {...restProps}>
      {name}
    </i>
  )
}
