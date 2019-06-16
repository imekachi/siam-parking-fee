import { calculateFee } from '../operations/fee'
import COLORS from './colors'
import { parkingInfo } from './parking'

const MAX_OVERVIEW_HOURS = 8

export const OVERVIEW_HOURS_ARRAY = Array.from(
  // make array-like object that have specific length property
  { length: MAX_OVERVIEW_HOURS },
  // map function to create the array using index + 1
  // which will result in an array starting from 1 to array length
  (unused, index) => index + 1
)
/**
 * This data shows parking fee of each place for each hour you parked
 * { placeName: [array of fee by hours of parking] }
 * @type {Object}
 */
export const feeOverview = Object.values(parkingInfo).map(parking => {
  return {
    label: parking.name,
    data: OVERVIEW_HOURS_ARRAY.map(hours => calculateFee(parking.feeRates, hours)),
    borderColor: parking.color,
    backgroundColor: parking.color,
    fill: false,
  }
})

export const chartData = {
  labels: OVERVIEW_HOURS_ARRAY.map(hour => `${hour} hr${hour > 1 ? 's' : ''}`),
  datasets: feeOverview,
}

export const chartOptions = {
  maintainAspectRatio: false,
  tooltips: {
    // show all parking fee at the hour
    mode: 'index',
    intersect: false,
    // put cheaper parking to be displayed first
    itemSort: (a, b) => a.yLabel - b.yLabel,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  legend: {
    position: 'bottom',
    labels: {
      boxWidth: 5,
      padding: 20,
      usePointStyle: true,
    },
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          color: COLORS.GRID,
          zeroLineColor: COLORS.GRID,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          color: COLORS.GRID,
        },
      },
    ],
  },
}
