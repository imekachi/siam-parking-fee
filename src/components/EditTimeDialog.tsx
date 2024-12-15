import clsx from 'clsx'
import { FormEventHandler, useState } from 'react'
import { ParkingInfoState } from '../hooks/useParkingState.ts'
import { getDateFromTimeString } from '../utils/getDateFromTimeString.ts'
import { getTimeStringFromDate } from '../utils/getTimeStringFromDate.ts'
import { RefProp } from '../utils/react-types.ts'

export type EditTimeDialogProps = RefProp<HTMLDialogElement> & {
  isOpen: boolean
  isAnimatingOut: boolean
  initialCheckInTime?: ParkingInfoState['start']
  onCancel?: () => void
  onSubmit?: (updatedTime: Date) => void
}

export const EditTimeDialog = (props: EditTimeDialogProps) => {
  const {
    ref,
    isOpen,
    isAnimatingOut,
    initialCheckInTime,
    onCancel,
    onSubmit,
  } = props

  const [isPrevOpen, setIsPrevOpen] = useState(isOpen)
  const [checkInTime, setCheckInTime] = useState(
    getTimeStringFromDate(initialCheckInTime) ?? '',
  )

  if (isPrevOpen !== isOpen) {
    if (isOpen) {
      setCheckInTime(getTimeStringFromDate(initialCheckInTime))
    }
    setIsPrevOpen(isOpen)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    onSubmit?.(getDateFromTimeString(checkInTime))
  }

  return (
    <dialog
      ref={ref}
      className={clsx(
        'mx-2 mb-0 mt-auto w-auto max-w-none rounded-t-lg bg-neutral-900 px-6 pb-24 pt-8 md:mx-auto md:w-96',
        isAnimatingOut ? 'animate-slide-down' : 'animate-slide-up',
      )}
    >
      <h1 className="mx-4 mb-10 text-center text-xl font-semibold text-white">
        Change Check-in Time
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-8 flex justify-center">
          <input
            type="time"
            id="checkInTime"
            name="checkInTime"
            value={checkInTime}
            onChange={(event) => setCheckInTime(event.target.value)}
            className="w-44 rounded-lg border border-neutral-900 bg-neutral-800 p-4 text-2xl text-neutral-300 focus-visible:border-amber-100 focus-visible:ring-amber-100"
            required
          />
        </div>
        <div className="flex w-full justify-center gap-2">
          <button
            className="w-full rounded-full py-2.5 text-center font-semibold text-neutral-300 hover:bg-neutral-800"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button className="w-full rounded-full py-2.5 text-center font-semibold text-amber-300 hover:bg-neutral-800">
            Confirm
          </button>
        </div>
      </form>
    </dialog>
  )
}
