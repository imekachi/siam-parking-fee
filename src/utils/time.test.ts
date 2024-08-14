import { describe, expect, it } from 'vitest'
import { durationToTime, getDuration } from './time'

describe('getDuration', () => {
  const specs: {
    input: Parameters<typeof getDuration>
    output: ReturnType<typeof getDuration>
  }[] = [
    {
      input: [
        new Date('2019-01-01 10:00:000Z'),
        new Date('2019-01-01 11:00:000Z'),
      ],
      output: 3600000,
    },
    {
      input: [
        new Date('2019-01-01 11:00:000Z'),
        new Date('2019-01-01 10:00:000Z'),
      ],
      output: 3600000,
    },
    {
      input: [
        new Date('2019-01-01 10:00:000Z'),
        new Date('2019-01-01 10:30:000Z'),
      ],
      output: 1800000,
    },
    {
      input: [
        new Date('2019-01-01 10:00:000Z'),
        new Date('2019-01-01 10:15:000Z'),
      ],
      output: 900000,
    },
    {
      input: [
        new Date('2019-01-01 10:00:000Z'),
        new Date('2019-01-02 10:00:000Z'),
      ],
      output: 86400000,
    },
    {
      input: [
        new Date('2019-01-01 10:00:000Z'),
        new Date('2019-01-01 15:15:000Z'),
      ],
      output: 18900000,
    },
    {
      input: [
        new Date('2019-01-01 10:00:000Z'),
        new Date('2019-01-01 6:15:000Z'),
      ],
      output: 13500000,
    },
  ]

  specs.forEach(({ input, output }) => {
    it(`should return ${JSON.stringify(output)}, when receives (${JSON.stringify(
      input[0],
    )}, ${JSON.stringify(input[1])})`, () => {
      expect(getDuration(...input)).toBe(output)
    })
  })
})

describe('durationToTime', () => {
  const specs: {
    input: Parameters<typeof durationToTime>[0]
    output: ReturnType<typeof durationToTime>
  }[] = [
    {
      input: 3600000,
      output: { hours: 1, minutes: 0, seconds: 0 },
    },
    {
      input: 429539,
      output: { hours: 0, minutes: 7, seconds: 9 },
    },
    {
      input: 190000,
      output: { hours: 0, minutes: 3, seconds: 10 },
    },
    {
      input: 864000,
      output: { hours: 0, minutes: 14, seconds: 24 },
    },
    {
      input: 900,
      output: { hours: 0, minutes: 0, seconds: 0 },
    },
  ]

  specs.forEach(({ input, output }) => {
    it(`should return "${JSON.stringify(output)}" when passing ${input}`, () => {
      expect(durationToTime(input)).toEqual(output)
    })
  })
})
