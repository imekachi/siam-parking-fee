import { getDurationHrs, isArray } from './utils'

describe('utils/isArray()', () => {
  const specs = [
    {
      input: 1,
      output: false,
    },
    {
      input: '[]',
      output: false,
    },
    {
      input: null,
      output: false,
    },
    {
      input: undefined,
      output: false,
    },
    {
      input: {},
      output: false,
    },
    {
      input: [],
      output: true,
    },
  ]

  specs.forEach(({ input, output }) => {
    it(`should return ${JSON.stringify(output)}, when receive (${JSON.stringify(input)}`, () => {
      expect(isArray(input)).toBe(output)
    })
  })
})

describe('utils/getDurationHrs', () => {
  const specs = [
    {
      input: [new Date('2019-01-01 10:00:000Z'), new Date('2019-01-01 11:00:000Z')],
      output: 1,
    },
    {
      input: [new Date('2019-01-01 11:00:000Z'), new Date('2019-01-01 10:00:000Z')],
      output: 1,
    },
    {
      input: [new Date('2019-01-01 10:00:000Z'), new Date('2019-01-01 10:30:000Z')],
      output: 0.5,
    },
    {
      input: [new Date('2019-01-01 10:00:000Z'), new Date('2019-01-01 10:15:000Z')],
      output: 0.25,
    },
    {
      input: [new Date('2019-01-01 10:00:000Z'), new Date('2019-01-02 10:00:000Z')],
      output: 24,
    },
    {
      input: [new Date('2019-01-01 10:00:000Z'), new Date('2019-01-01 15:15:000Z')],
      output: 5.25,
    },
    {
      input: [new Date('2019-01-01 10:00:000Z'), new Date('2019-01-01 6:15:000Z')],
      output: 3.75,
    },
  ]

  specs.forEach(({ input, output }) => {
    it(`should return ${JSON.stringify(output)}, when receives (${JSON.stringify(
      input[0]
    )}, ${JSON.stringify(input[1])})`, () => {
      expect(getDurationHrs(...input)).toBe(output)
    })
  })
})
