import { isArray } from './utils'

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
