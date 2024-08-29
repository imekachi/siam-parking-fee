import { MouseEvent, useRef, useState } from 'react'
import './App.css'
import { useParkingState } from '../hooks/useParkingState'
import EditButton from './EditButton.tsx'
import FeeChart from './FeeChart'
import ParkButton from './ParkButton'
import ParkingInfo from './ParkingInfo'
import ParkSelectionPopup from './ParkSelectionPopup'
import ResetButton from './ResetButton'

function App() {
  const [isChoosingPark, setIsChoosingPark] = useState(false)
  const { parkingInfo, isLive, toggleIsLive, savePark, resetPark } =
    useParkingState()

  const dialogRef = useRef<HTMLDialogElement>(null)

  const onChoosePark = (event: MouseEvent<HTMLElement>) => {
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
          <div className="fixed bottom-16 left-0 right-0 z-10 flex items-center justify-center gap-4">
            <EditButton onClick={() => dialogRef.current?.showModal()} />
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

      <dialog
        ref={dialogRef}
        className="mx-2 mb-0 mt-auto w-auto max-w-none animate-slide-up space-y-4 rounded-t-lg bg-white p-5 pb-6"
      >
        <h1 className="my-2 text-center text-xl font-bold">
          Change Check-in Time
        </h1>
        <p>content</p>
        <div className="flex justify-center gap-2">
          <button
            className="w-28 rounded-full bg-yellow py-1.5 text-center"
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </button>
          <button className="w-28 rounded-full bg-yellow py-1 text-center">
            Confirm
          </button>
        </div>
      </dialog>
    </main>
  )
}

export default App
