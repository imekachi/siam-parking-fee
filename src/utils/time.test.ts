import { getDuration } from './time'

describe('getDuration', () => {
  const specs: {
    input: Parameters<typeof getDuration>
    output: ReturnType<typeof getDuration>
  }[] = [
    {
      input: [new Date('2019-01-01 10:00:000Z'), new Date('2019-01-01 11:00:000Z')],
      output: 3600000,
    },
    {
      input: [new Date('2019-01-01 11:00:000Z'), new Date('2019-01-01 10:00:000Z')],
      output: 3600000,
    },
    {
      input: [new Date('2019-01-01 10:00:000Z'), new Date('2019-01-01 10:30:000Z')],
      output: 1800000,
    },
    {
      input: [new Date('2019-01-01 10:00:000Z'), new Date('2019-01-01 10:15:000Z')],
      output: 900000,
    },
    {
      input: [new Date('2019-01-01 10:00:000Z'), new Date('2019-01-02 10:00:000Z')],
      output: 86400000,
    },
    {
      input: [new Date('2019-01-01 10:00:000Z'), new Date('2019-01-01 15:15:000Z')],
      output: 18900000,
    },
    {
      input: [new Date('2019-01-01 10:00:000Z'), new Date('2019-01-01 6:15:000Z')],
      output: 13500000,
    },
  ]

  specs.forEach(({ input, output }) => {
    it(`should return ${JSON.stringify(output)}, when receives (${JSON.stringify(
      input[0]
    )}, ${JSON.stringify(input[1])})`, () => {
      expect(getDuration(...input)).toBe(output)
    })
  })
})
