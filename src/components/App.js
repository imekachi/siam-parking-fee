import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { chartData, chartOptions } from '../config/chart'
import './App.css'
import COLORS from '../config/colors'
import { parkingInfo } from '../config/parking'
import { calculateFee, storage } from '../operations/fee'
import { getDurationHrs } from '../utils'

window.getDurationHrs = getDurationHrs

function App() {
  const [park, setPark] = useState(null)

  const onClickPark = () => {
    // create current date obj
    const startTime = new Date()
    // store it to storage
    storage.store({ start: startTime, parkId: 'MBK' })
    // initialize currentDuration
    const currentDuration = 0.001
    // initialize currentFee
    const currentFee = calculateFee(parkingInfo.MBK.feeRates, currentDuration)

    setPark({
      start: startTime,
      name: parkingInfo.MBK.name,
      color: parkingInfo.MBK.color,
      durationHrs: currentDuration,
      fee: currentFee,
    })
  }

  const onClickReset = () => {
    storage.reset()
    setPark(null)
  }

  useEffect(() => {
    const { start, parkId } = storage.getData()
    if (!start) return

    const currentDuration = getDurationHrs(start)
    const parkInfo = parkingInfo[parkId]

    setPark({
      start,
      name: parkInfo.name,
      color: parkInfo.color,
      durationHrs: currentDuration,
      fee: calculateFee(parkInfo.feeRates, currentDuration),
    })
  }, [])

  return (
    <div className="App">
      <h1 className="header">Bike parking fee</h1>
      <div className="chart-container">
        <Line data={chartData} options={chartOptions} height={280} />
      </div>
      {park ? (
        <>
          <div className="parking-info-container">
            <h2 className="parking-at" style={{ color: park.color }}>
              {park.name}
            </h2>
            <div className="park-info -start">
              <span className="label">Check-in:</span>{' '}
              <strong>{park.start.toLocaleString()}</strong>
            </div>
            <div className="park-info -duration">
              <span className="label">Duration:</span>{' '}
              <strong>{park.durationHrs.toLocaleString()} hrs</strong>
            </div>
            <div className="park-info -fee">
              <span className="label">Total: </span>
              <span className="fee" style={{ color: COLORS.GREEN }}>
                {park.fee.toLocaleString('en-TH', { style: 'currency', currency: 'THB' })}
              </span>
            </div>
          </div>
          <button
            className="floating-button"
            style={{ backgroundColor: COLORS.YELLOW }}
            onClick={onClickReset}
          >
            <i className="material-icons">delete</i>Reset
          </button>
        </>
      ) : (
        <button
          className="floating-button"
          style={{ backgroundColor: COLORS.PURPLE }}
          onClick={onClickPark}
        >
          <i className="material-icons">directions_car</i>Park
        </button>
      )}
    </div>
  )
}

export default App
