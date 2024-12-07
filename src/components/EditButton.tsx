import { ElementRef, useRef, useState } from 'react'
import { useParkingState } from '../hooks/useParkingState.ts'
import { EditTimeDialog, EditTimeDialogProps } from './EditTimeDialog.tsx'
import { FloatingButton, FloatingButtonProps } from './FloatingButton.tsx'
import { Icon } from './Icon.tsx'

export type EditButtonProps = Pick<FloatingButtonProps, 'disabled'> &
  Pick<ReturnType<typeof useParkingState>, 'parkingInfo' | 'savePark'>

export const EditButton = (props: EditButtonProps) => {
  const { parkingInfo, savePark, disabled } = props

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  const dialogRef = useRef<ElementRef<typeof EditTimeDialog> | null>(null)

  const showDialog = () => {
    dialogRef.current?.showModal()
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      dialogRef.current?.close()
      setIsAnimatingOut(false)
      setIsDialogOpen(false)
    }, 200) // Match the duration of the slide-down animation
  }

  const handleSubmitEditTime: EditTimeDialogProps['onSubmit'] = (
    updatedTime,
  ) => {
    if (!parkingInfo?.parkId) {
      alert('No parking info found')
      return
    }
    savePark(parkingInfo.parkId, updatedTime)
    closeDialog()
  }

  return (
    <>
      <FloatingButton onClick={showDialog} disabled={disabled}>
        <Icon name="edit" />
      </FloatingButton>
      <EditTimeDialog
        ref={dialogRef}
        initialCheckInTime={parkingInfo?.start}
        isOpen={isDialogOpen}
        isAnimatingOut={isAnimatingOut}
        onCancel={closeDialog}
        onSubmit={handleSubmitEditTime}
      />
    </>
  )
}
