/**
 * Check if the value is an array
 *
 * @param {*} value
 * @return {boolean}
 */
export function isArray(value) {
  return !!value && typeof value === 'object' && value.constructor.name === 'Array'
}
