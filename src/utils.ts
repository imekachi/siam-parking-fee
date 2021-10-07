/**
 * Check if the value is an array
 */
export function isArray(value: any): boolean {
  return !!value && typeof value === 'object' && value.constructor.name === 'Array'
}

/**
 * Get duration between two date objects in milliseconds
 * NOTE: the duration will always be positive, which mean the arguments order won't affect the result
 */
export function getDuration(dateStart: Date, dateEnd: Date = new Date()): number {
  return Math.abs(dateEnd.getTime() - dateStart.getTime())
}

/**
 * converts milliseconds to hours
 */
export function milliToHrs(milliseconds: number): number {
  return milliseconds / 1000 / 60 / 60
}
