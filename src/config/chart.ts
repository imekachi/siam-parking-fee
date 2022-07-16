import { calculateFee } from '../operations/fee'
import COLORS from './colors'
import { parkConfig, ParkInfo } from './park'
import type { ChartOptions } from 'chart.js'

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
 */
export const feeOverview = Object.values(parkConfig).map((park: ParkInfo) => ({
  label: park.name,
  data: OVERVIEW_HOURS_ARRAY.map((hours) => calculateFee(park.feeRates, hours)),
  borderColor: park.color,
  backgroundColor: park.color,
  fill: false,
}))

export const chartData = {
  labels: OVERVIEW_HOURS_ARRAY.map((hour) => `${hour} hr${hour > 1 ? 's' : ''}`),
  datasets: feeOverview,
}

export const chartOptions: ChartOptions = {
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      // show all parking fee at the hour
      mode: 'index',
      intersect: false,
      // put cheaper parking to be displayed first
      itemSort: (a, b) => a.parsed.y - b.parsed.y,
    },
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 5,
        padding: 20,
        usePointStyle: true,
      },
    },
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: COLORS.GRID,
        borderColor: COLORS.GRID,
      },
    },
    x: {
      grid: {
        color: COLORS.GRID,
        borderColor: COLORS.GRID,
      },
    },
  },
}
