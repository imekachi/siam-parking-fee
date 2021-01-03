import COLORS from './colors'

export const parkConfig = {
  ICON: {
    name: 'Icon Siam',
    color: COLORS.PURPLE,
    feeRates:
      new Date() > new Date('2021-01-31 23:59')
        ? [
            { hrs: 2, cost: 0 },
            { hrs: 1, cost: 20 },
          ]
        : [
            { hrs: 6, cost: 0 },
            { hrs: 1, cost: 20 },
          ],
  },
  SAMYAN: {
    name: 'SamYan Mitrtown',
    color: COLORS.YELLOW,
    feeRates: [
      { hrs: 2, cost: 0 },
      { hrs: 1, cost: 10 },
      { hrs: 1, cost: 10 },
      { hrs: 1, cost: 20 },
    ],
  },
  MBK: {
    name: 'MBK',
    color: COLORS.RED,
    feeRates: [
      { hrs: 2, cost: 10 },
      { hrs: 1, cost: 10 },
    ],
  },
  CTW: {
    name: 'CTW',
    color: COLORS.BLUE,
    feeRates: [
      { hrs: 4, cost: 10 },
      { hrs: 1, cost: 20 },
    ],
  },
  SIAM_CEN: {
    name: 'Siam Center',
    color: COLORS.GREEN,
    feeRates: [
      { hrs: 2, cost: 20 },
      { hrs: 1, cost: 20 },
    ],
  },
}

export const parkConfigEntries = Object.entries(parkConfig)
