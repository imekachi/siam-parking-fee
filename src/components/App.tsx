import { ElementRef, useRef, useState } from 'react'
import './App.css'
import { useParkingState } from '../hooks/useParkingState'
import { EditButton } from './EditButton.tsx'
import { EditTimeDialog } from './EditTimeDialog.tsx'
import FeeChart from './FeeChart'
import ParkButton from './ParkButton'
import ParkingInfo from './ParkingInfo'
import ParkSelectionPopup, {
  ParkSelectionPopupProps,
} from './ParkSelectionPopup'
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
  const todayDateString = new Date().toDateString()
  return new Date(`${todayDateString} ${timeString}`)
}

function App() {
  const [isChoosingPark, setIsChoosingPark] = useState(false)
  const { parkingInfo, isLive, toggleIsLive, savePark, resetPark } =
    useParkingState()
  const [isClosingDialog, setIsClosingDialog] = useState(false)
  const [checkInTime, setCheckInTime] = useState('')

  const dialogRef = useRef<ElementRef<typeof EditTimeDialog> | null>(null)

  const onChoosePark: ParkSelectionPopupProps['onChoosePark'] = (event) => {
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

      <EditTimeDialog
        ref={dialogRef}
        isClosingDialog={isClosingDialog}
        checkInTime={checkInTime}
        setCheckInTime={setCheckInTime}
        closeDialog={closeDialog}
        confirmEditTime={confirmEditTime}
      />
    </main>
  )
}

export default App
