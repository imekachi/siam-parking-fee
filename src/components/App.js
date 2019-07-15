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

const defaultState = { isChoosingPark: false, isRendered: false }

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
    // we will remove storage data but we want to keep "isLive" setting
    const { isLive } = storage.getData()
    storage.reset()
    // save "isLive" back into storage
    storage.store({ isLive })
    setState(defaultState)
  }

  const onClickLiveButton = () => {
    // determine current state of isLive
    const isLive = !state.isLive
    // update isLive data in storage
    storage.store({ isLive })
    // update isLive data in react state
    setState({ ...state, isLive })
  }

  // This intended to run on the first mount ONLY
  // to display current park state if exist
  useEffect(() => {
    const { start, parkId, isLive: storageIsLive } = storage.getData()
    if (!start) return undefined

    const parkInfo = parkConfig[parkId]

    // create update state function
    // that receives option object
    // with default value of isLive is from state
    const updateState = ({ isLive = state.isLive } = {}) => {
      const currentDuration = getDurationHrs(start)
      setState({
        ...state,
        isLive,
        isRendered: true,
        park: {
          start,
          name: parkInfo.name,
          color: parkInfo.color,
          durationHrs: currentDuration,
          fee: calculateFee(parkInfo.feeRates, currentDuration),
        },
      })
    }

    let timeoutId
    if (state.isLive) {
      timeoutId = setTimeout(updateState, 1000)
    } else if (!state.isRendered) {
      // first render only, use isLive from storage
      updateState({ isLive: storageIsLive })
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [state])

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
          <ParkingInfo
            {...state.park}
            isLive={state.isLive}
            onClickLiveButton={onClickLiveButton}
          />
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
