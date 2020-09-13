import { calculateFee } from './fee'

describe('calculateFee()', () => {
  const specs = [
    {
      input: [[{ hrs: 1, cost: 10 }], 1],
      output: 10,
    },
    {
      input: [[{ hrs: 1, cost: 10 }], 2],
      output: 20,
    },
    {
      input: [[{ hrs: 2, cost: 10 }], 1],
      output: 10,
    },
    {
      input: [[{ hrs: 2, cost: 10 }], 2],
      output: 10,
    },
    {
      input: [[{ hrs: 4, cost: 10 }], 2],
      output: 10,
    },
    {
      input: [
        [
          { hrs: 2, cost: 10 },
          { hrs: 1, cost: 20 },
        ],
        3,
      ],
      output: 30,
    },
    {
      input: [
        [
          { hrs: 2, cost: 10 },
          { hrs: 1, cost: 20 },
        ],
        4,
      ],
      output: 50,
    },
    {
      input: [
        [
          { hrs: 4, cost: 10 },
          { hrs: 1, cost: 20 },
        ],
        4,
      ],
      output: 10,
    },
    {
      input: [
        [
          { hrs: 0.5, cost: 0 },
          { hrs: 1, cost: 20 },
        ],
        0.5,
      ],
      output: 0,
    },
    {
      input: [
        [
          { hrs: 0.5, cost: 0 },
          { hrs: 1, cost: 20 },
        ],
        1,
      ],
      output: 20,
    },
    {
      input: [
        [
          { hrs: 0.5, cost: 0 },
          { hrs: 4, cost: 10 },
          { hrs: 1, cost: 20 },
        ],
        4,
      ],
      output: 10,
    },
    {
      input: [
        [
          { hrs: 0.5, cost: 0 },
          { hrs: 4, cost: 10 },
          { hrs: 1, cost: 20 },
        ],
        4.5,
      ],
      output: 10,
    },
    {
      input: [
        [
          { hrs: 0.5, cost: 0 },
          { hrs: 4, cost: 10 },
          { hrs: 1, cost: 20 },
        ],
        5,
      ],
      output: 30,
    },
  ]
  specs.forEach(({ input, output }) => {
    it(`should return ${JSON.stringify(output)}, when receive (${JSON.stringify(
      input[0]
    )}, ${JSON.stringify(input[1])})`, () => {
      expect(calculateFee(...input)).toBe(output)
    })
  })

  const throwSpecs = [[], [null], [{}], [''], [1]]
  throwSpecs.forEach((input) => {
    it(`should throw when receives ${JSON.stringify(input)}`, () => {
      expect(() => calculateFee(...input)).toThrow()
    })
  })
})
