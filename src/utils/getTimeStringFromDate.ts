/**
 * convert a Date object to a string in the format "HH:mm"
 * input type="time" requires a string in the format "HH:mm", "HH:mm:ss"
 */
export const getTimeStringFromDate = (start: Date | undefined): string => {
  if (!start) return ''

  return start.toLocaleTimeString('en', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}
