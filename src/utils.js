/**
 * Check if the value is an array
 *
 * @param {*} value
 * @return {boolean}
 */
export function isArray(value) {
  return !!value && typeof value === 'object' && value.constructor.name === 'Array'
}

/**
 * Get duration between two date objects
 * NOTE: the duration will always be positive, which mean the arguments order won't affect the result
 *
 * @param {Date} dateStart
 * @param {Date} [dateEnd = new Date()]
 * @returns {number} duration
 */
export function getDurationHrs(dateStart, dateEnd = new Date()) {
  const durationMillisec = Math.abs(dateEnd - dateStart)
  // convert milliseconds to hours
  return durationMillisec / 1000 / 60 / 60
}
