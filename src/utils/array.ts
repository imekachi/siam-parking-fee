/**
 * Check if the value is an array
 */
export function isArray(value: any): boolean {
  return !!value && typeof value === 'object' && value.constructor.name === 'Array'
}
