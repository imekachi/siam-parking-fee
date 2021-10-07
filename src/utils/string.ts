/**
 * fill the value to match the desire length and return as a string
 */
export function strPad(value: number | string, length: number, pad: string): string {
  value = typeof value === 'number' ? value.toString() : value
  const lengthToFill = length - value.length
  if (lengthToFill <= 0) return value

  return `${pad.repeat(lengthToFill)}${value}`
}
