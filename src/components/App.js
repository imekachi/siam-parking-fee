import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { chartData, chartOptions } from '../config/chart'
import COLORS from '../config/colors'
import { parkConfig } from '../config/park'
import { calculateFee, storage } from '../operations/fee'
import { getDurationHrs } from '../utils'
import './App.css'
import ParkingInfo from './ParkingInfo'
import PopUpChoosePark from './PopUpChoosePark'

const defaultState = { isChoosingPark: false }

function App() {
  const [state, setState] = useState(defaultState)

  const onClickPark = () => {
    setState({
      ...state,
      startTime: new Date(), // record currentTime
      isChoosingPark: true, // popup park choosing popup
    })
  }

  const onChoosePark = event => {
    const element = event.target
    const parkId = element.dataset.parkId

    // get parkInfo
    const park = parkConfig[parkId]

    // store it to storage
    storage.store({ start: state.startTime, parkId })
    // initialize currentDuration
    const currentDuration = 0.001
    // initialize currentFee
    const currentFee = calculateFee(park.feeRates, currentDuration)

    setState({
      ...state,
      park: {
        start: state.startTime,
        name: park.name,
        color: park.color,
        durationHrs: currentDuration,
        fee: currentFee,
      },
      isChoosingPark: false,
    })
  }

  const onClickReset = () => {
    storage.reset()
    setState(defaultState)
  }

  // This intended to run on the first mount ONLY
  // to display current park state if exist
  useEffect(() => {
    const { start, parkId } = storage.getData()
    if (!start) return

    const currentDuration = getDurationHrs(start)
    const parkInfo = parkConfig[parkId]

    setState({
      ...state,
      park: {
        start,
        name: parkInfo.name,
        color: parkInfo.color,
        durationHrs: currentDuration,
        fee: calculateFee(parkInfo.feeRates, currentDuration),
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <h1 className="header">Bike parking fee</h1>
      {/* CHART */}
      <div className="chart-container">
        <Line data={chartData} options={chartOptions} height={280} />
      </div>

      {/* PARK INFO */}
      {state.park ? (
        <>
          <ParkingInfo {...state.park} />
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
          className="floating-button _prevent-selection"
          style={{ backgroundColor: COLORS.PURPLE }}
          onClick={onClickPark}
        >
          <i className="material-icons">directions_car</i>Park
        </button>
      )}

      {/* POPUP to choose the park */}
      {state.isChoosingPark && (
        <PopUpChoosePark onChoosePark={onChoosePark} onClickBackdrop={onClickReset} />
      )}
    </div>
  )
}

export default App
