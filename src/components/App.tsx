import clsx from 'clsx'
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
  const [isClosingDialog, setIsClosingDialog] = useState(false)
  const { parkingInfo, isLive, toggleIsLive, savePark, resetPark } =
    useParkingState()

  const dialogRef = useRef<HTMLDialogElement>(null)

  const onChoosePark = (event: MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement
    const parkId = element.dataset.parkId as string

    setIsChoosingPark(false)
    savePark(parkId)
  }

  const closeDialog = () => {
    setIsClosingDialog(true)
    setTimeout(() => {
      dialogRef.current?.close()
      setIsClosingDialog(false)
    }, 200) // Match the duration of the slide-down animation
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
        className={clsx(
          'mx-2 mb-0 mt-auto w-auto max-w-none space-y-4 rounded-t-lg bg-gray-600 p-5 pb-6 md:mx-auto md:w-96',
          isClosingDialog ? 'animate-slide-down' : 'animate-slide-up',
        )}
      >
        <h1 className="mb-4 mt-2 text-white">Change Check-in Time</h1>
        <div></div>
        <div className="flex w-full justify-center gap-2">
          <button
            className="w-full rounded-full py-1.5 text-center font-semibold text-gray-100 hover:bg-gray-400"
            onClick={closeDialog}
          >
            Close
          </button>
          <button className="w-full rounded-full py-1.5 text-center font-semibold text-gray-100 hover:bg-gray-400">
            Confirm
          </button>
        </div>
      </dialog>
    </main>
  )
}

export default App
