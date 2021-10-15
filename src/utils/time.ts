import { strPad } from './string'

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
export function msToHrs(ms: number): number {
  return ms / 1000 / 60 / 60
}

export type TimeFragment = {
  hours: number
  minutes: number
  seconds: number
}

export function durationToTime(ms: number): TimeFragment {
  /**
   * Takes as many whole units from the time pool (ms) as possible
   * @param {number} msUnit - Size of a single unit in milliseconds
   * @return {number} Number of units taken from the time pool
   */
  const allocate = (msUnit: number): number => {
    const units = Math.trunc(ms / msUnit)
    ms -= units * msUnit
    return units
  }

  return {
    hours: allocate(3600000),
    minutes: allocate(60000),
    seconds: allocate(1000),
  }
}

export function formatDuration(ms: number): string {
  const time = durationToTime(ms)
  return `${strPad(time.hours, 2, '0')}:${strPad(time.minutes, 2, '0')}:${strPad(
    time.seconds,
    2,
    '0'
  )}`
}
