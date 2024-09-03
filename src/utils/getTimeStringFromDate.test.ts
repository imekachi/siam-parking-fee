import { describe, expect, it } from 'vitest'
import { getTimeStringFromDate } from './getTimeStringFromDate'

describe('getTimeStringFromDate', () => {
  const specs: {
    input: Parameters<typeof getTimeStringFromDate>
    output: ReturnType<typeof getTimeStringFromDate>
  }[] = [
    {
      input: [undefined],
      output: '',
    },
    {
      input: [new Date('2024-01-01 14:30')],
      output: '14:30',
    },
    {
      input: [new Date('2024-01-01 9:05')],
      output: '09:05',
    },
    {
      input: [new Date('2024-12-31 23:59')],
      output: '23:59',
    },
  ]

  specs.forEach(({ input, output }) => {
    it(`should return ${JSON.stringify(output)} when passing ${JSON.stringify(input)}`, () => {
      expect(getTimeStringFromDate(...input)).toEqual(output)
    })
  })
})
