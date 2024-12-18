import { useState } from 'react'
import './App.css'
import { useParkingState } from '../hooks/useParkingState'
import { EditButton } from './EditButton.tsx'
import FeeChart from './FeeChart'
import ParkButton from './ParkButton'
import ParkingInfo from './ParkingInfo'
import ParkSelectionPopup, {
  ParkSelectionPopupProps,
} from './ParkSelectionPopup'
import { ResetButton } from './ResetButton'

function App() {
  const [isChoosingPark, setIsChoosingPark] = useState(false)
  const { parkingInfo, isLive, toggleIsLive, savePark, resetPark } =
    useParkingState()

  const onChoosePark: ParkSelectionPopupProps['onChoosePark'] = (event) => {
    const element = event.target as HTMLElement
    const parkId = element.dataset.parkId as string

    setIsChoosingPark(false)
    savePark(parkId)
  }

  return (
    <main className="App">
      <header className="mb-8">
        <h1 className="m-0 text-center text-xl">Bike parking fee</h1>
        <p className="mt-1 text-center text-xs opacity-65">
          v{import.meta.env.VITE_APP_VERSION}
        </p>
      </header>
      <FeeChart />

      {parkingInfo ? (
        <>
          <ParkingInfo
            parkId={parkingInfo.parkId}
            start={parkingInfo.start}
            isLive={isLive}
            onClickLiveButton={toggleIsLive}
          />
          <div className="fixed inset-x-0 bottom-16 z-10 flex items-center justify-center gap-4">
            <EditButton
              parkingInfo={parkingInfo}
              savePark={savePark}
              disabled={!parkingInfo}
            />
            <ResetButton onClick={resetPark} />
          </div>
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
