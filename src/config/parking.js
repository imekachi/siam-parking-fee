import COLORS from './colors'

export const parkingInfo = {
  MBK: {
    name: 'MBK',
    color: COLORS.RED,
    feeRates: [{ hrs: 2, cost: 10 }, { hrs: 1, cost: 10 }],
  },
  CTW: {
    name: 'CTW',
    color: COLORS.BLUE,
    feeRates: [{ hrs: 4, cost: 10 }, { hrs: 1, cost: 20 }],
  },
  SIAM_CEN: {
    name: 'Siam Center',
    color: COLORS.GREEN,
    feeRates: [{ hrs: 4, cost: 10 }, { hrs: 1, cost: 20 }],
  },
}
