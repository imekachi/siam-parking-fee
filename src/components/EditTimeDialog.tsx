import clsx from 'clsx'
import { Dispatch, forwardRef, SetStateAction } from 'react'

export type DialogEditTimeProps = {
  isClosingDialog: boolean
  checkInTime: string
  setCheckInTime: Dispatch<SetStateAction<string>>
  closeDialog: () => void
  confirmEditTime: () => void
}
export const EditTimeDialog = forwardRef<
  HTMLDialogElement,
  DialogEditTimeProps
>((props, ref) => {
  const {
    isClosingDialog,
    checkInTime,
    setCheckInTime,
    closeDialog,
    confirmEditTime,
  } = props

  return (
    <dialog
      ref={ref}
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
  )
})
EditTimeDialog.displayName = 'EditTimeDialog'
