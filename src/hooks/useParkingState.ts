import { useCallback, useEffect, useState } from 'react'
import { storage } from '../operations/fee'

export interface ParkingInfoState {
  parkId: string
  start: Date
}

export function useParkingState() {
  const { isLive, setIsLive, toggleIsLive } = useLiveState()
  const [parkingInfo, setParkingInfo] = useState<ParkingInfoState>()

  // initialize data
  useEffect(() => {
    const { start, parkId, isLive: storageIsLive } = storage.getData() ?? {}
    if (!start || !parkId) return undefined

    setIsLive(Boolean(storageIsLive))
    setParkingInfo({ parkId, start })
  }, [setIsLive])

  const savePark = (parkId: string) => {
    const newParkingInfo: ParkingInfoState = {
      parkId,
      start: new Date(),
    }

    // store it to storage
    storage.store({ start: newParkingInfo.start, parkId })
    // update the state
    setParkingInfo(newParkingInfo)
  }

  const resetPark = () => {
    storage.reset()
    // we want to keep "isLive" setting,
    // save "isLive" back into storage
    storage.store({ isLive })
    setParkingInfo(undefined)
  }

  return { parkingInfo, isLive, toggleIsLive, savePark, resetPark }
}

function useLiveState() {
  const [isLive, setIsLive] = useState(false)

  const toggleIsLive = useCallback(() => {
    const newIsLive = !isLive
    storage.store({ isLive: newIsLive })
    setIsLive(newIsLive)
  }, [isLive])

  return { isLive, setIsLive, toggleIsLive }
}
