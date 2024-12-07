import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { getDateFromTimeString } from './getDateFromTimeString.ts'

describe('getDateFromTimeString', () => {
  beforeAll(() => {
    const date = new Date('2024-10-10T00:00:00Z')
    vi.useFakeTimers()
    vi.setSystemTime(date)
  })
  afterAll(() => {
    vi.useRealTimers()
  })
  const specs: {
    input: Parameters<typeof getDateFromTimeString>
    output: string
  }[] = [
    {
      input: ['14:30'],
      output: '10/10/2024, 2:30:00 PM',
    },
    {
      input: ['09:05'],
      output: '10/10/2024, 9:05:00 AM',
    },
    {
      input: ['23:59'],
      output: '10/10/2024, 11:59:00 PM',
    },
  ]

  specs.forEach(({ input, output }) => {
    it(`should return ${output} when passing ${input}`, () => {
      expect(getDateFromTimeString(...input).toLocaleString()).toBe(output)
    })
  })
})
