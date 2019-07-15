import { isArray } from '../utils'

/**
 * calculate parking fee
 *
 * @param {Array.<{hrs: number, cost: number}>} feeRates
 * @param {number} [parkedHrs = 1]
 */
export function calculateFee(feeRates, parkedHrs = 1) {
  if (!isArray(feeRates)) {
    throw new TypeError(
      `Error! "feeRates" argument for "calculateFee()" should be an array, instead it receives, ${JSON.stringify(
        feeRates
      )}`
    )
  }

  // Initialize values
  let totalCost = 0
  let hrsLeft = parkedHrs

  // use .some to break instead of forEach that cannot be stopped
  feeRates.some((rate, index) => {
    // Stop the loop when there is no hrsLeft
    if (hrsLeft <= 0) return true

    // if the rate is the last one,
    // we'll use that rate for the rest of hr left.
    if (index === feeRates.length - 1) {
      // Most parking fee will think that fragment of an hour is full one hour,
      // and we can achieve that by using Math.ceil
      const hrsFactor = Math.ceil(hrsLeft / rate.hrs)
      const costByRate = hrsFactor * rate.cost
      totalCost += costByRate
      hrsLeft = 0

      // stop any further operation,
      // because at this the last item and we should get our answer.
      return true
    }

    // add cost of the rate to total cost
    totalCost += rate.cost
    // minus hrsLeft and make sure hrsLeft won't go below zero
    hrsLeft = Math.max(hrsLeft - rate.hrs, 0)

    // continue the loop
    return false
  })

  return totalCost
}

export const storage = {
  key: 'PARKING_TIME_START',
  store: function(data) {
    const prevData = this.getData()
    localStorage.setItem(this.key, JSON.stringify({ ...prevData, ...data }))
  },
  getData: function() {
    const rawData = localStorage.getItem(this.key)
    if (!rawData) return {}

    const parsedData = JSON.parse(rawData)

    if (parsedData.start) {
      parsedData.start = new Date(parsedData.start)
    }

    return parsedData
  },
  reset: function() {
    localStorage.removeItem(this.key)
  },
}
