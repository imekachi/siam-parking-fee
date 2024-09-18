/**
 * Converts a time string to a date object
 */
export const getDateFromTimeString = (timeString: string): Date => {
  const todayDateString = new Date().toDateString()
  return new Date(`${todayDateString} ${timeString}`)
}
