import clsx from 'clsx'
import { MouseEvent, useRef, useState } from 'react'
import './App.css'
import { useParkingState } from '../hooks/useParkingState'
import { EditButton } from './EditButton.tsx'
import FeeChart from './FeeChart'
import ParkButton from './ParkButton'
import ParkingInfo from './ParkingInfo'
import ParkSelectionPopup from './ParkSelectionPopup'
import { ResetButton } from './ResetButton'

const getTimeStringFromDate = (start: Date | undefined) => {
  if (!start) return ''

  // input type="time" requires a string in the format "HH:mm", "HH:mm:ss"
  return start.toLocaleTimeString('en', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

const getDateFromTimeString = (timeString: string) => {
  return new Date(new Date().toDateString() + ' ' + timeString)
}

function App() {
  const [isChoosingPark, setIsChoosingPark] = useState(false)
  const { parkingInfo, isLive, toggleIsLive, savePark, resetPark } =
    useParkingState()
  const [isClosingDialog, setIsClosingDialog] = useState(false)
  const [checkInTime, setCheckInTime] = useState('')

  const dialogRef = useRef<HTMLDialogElement>(null)

  const onChoosePark = (event: MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement
    const parkId = element.dataset.parkId as string

    setIsChoosingPark(false)
    savePark(parkId)
  }

  const showDialog = () => {
    setCheckInTime(getTimeStringFromDate(parkingInfo?.start))
    dialogRef.current?.showModal()
  }

  const closeDialog = () => {
    setIsClosingDialog(true)
    setTimeout(() => {
      dialogRef.current?.close()
      setIsClosingDialog(false)
    }, 200) // Match the duration of the slide-down animation
  }

  const confirmEditTime = () => {
    if (!parkingInfo) {
      alert('No parking info found')
      return
    }
    savePark(parkingInfo.parkId, getDateFromTimeString(checkInTime))
    closeDialog()
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
            <EditButton onClick={showDialog} disabled={!parkingInfo} />
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
          'mx-2 mb-0 mt-auto w-auto max-w-none rounded-t-lg bg-gray-600 px-6 pb-24 pt-8 md:mx-auto md:w-96',
          isClosingDialog ? 'animate-slide-down' : 'animate-slide-up',
        )}
      >
        <h1 className="mx-4 mb-10 text-center text-xl font-semibold text-white">
          Change Check-in Time
        </h1>
        <div className="mb-8 flex justify-center">
          <input
            type="time"
            id="checkInTime"
            name="checkInTime"
            value={checkInTime}
            onChange={(e) => setCheckInTime(e.target.value)}
            className="w-44 rounded-lg border border-gray-600 bg-gray-400 p-4 text-2xl text-gray-100 focus-visible:border-amber-100 focus-visible:ring-amber-100"
            required
          />
        </div>
        <div className="flex w-full justify-center gap-2">
          <button
            className="w-full rounded-full py-2.5 text-center font-semibold text-gray-100 hover:bg-gray-400"
            onClick={closeDialog}
          >
            Close
          </button>
          <button
            className="w-full rounded-full py-2.5 text-center font-semibold text-yellow hover:bg-gray-400"
            onClick={confirmEditTime}
          >
            Confirm
          </button>
        </div>
      </dialog>
    </main>
  )
}

export default App
