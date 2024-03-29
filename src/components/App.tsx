import { useState } from 'react'
import './App.css'
import ParkingInfo from './ParkingInfo'
import ParkSelectionPopup from './ParkSelectionPopup'
import FeeChart from './FeeChart'
import ParkButton from './ParkButton'
import ResetButton from './ResetButton'
import { useParkingState } from '../hooks/useParkingState'

function App() {
  const [isChoosingPark, setIsChoosingPark] = useState(false)
  const { parkingInfo, isLive, toggleIsLive, savePark, resetPark } = useParkingState()

  const onChoosePark = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement
    const parkId = element.dataset.parkId as string

    setIsChoosingPark(false)
    savePark(parkId)
  }

  return (
    <main className="App">
      <h1 className="header">Bike parking fee</h1>
      <FeeChart />

      {parkingInfo ? (
        <>
          <ParkingInfo
            parkId={parkingInfo.parkId}
            start={parkingInfo.start}
            isLive={isLive}
            onClickLiveButton={toggleIsLive}
          />
          <ResetButton onClick={resetPark} />
        </>
      ) : (
        <ParkButton onClick={() => setIsChoosingPark(true)} />
      )}

      {isChoosingPark && (
        <ParkSelectionPopup
          onChoosePark={onChoosePark}
          onClickBackdrop={() => setIsChoosingPark(false)}
        />
      )}
    </main>
  )
}

export default App
