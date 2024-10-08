import clsx from 'clsx'
import { MouseEvent, useEffect, useMemo, useState } from 'react'
import COLORS from '../config/colors'
import { parkConfig } from '../config/park'
import { calculateFee } from '../operations/fee'
import { formatDuration, getDuration, msToHrs } from '../utils/time'
import './ParkInfo.css'

interface ParkingInfoProps {
  parkId: string
  start: Date
  isLive?: boolean
  onClickLiveButton?: (event: MouseEvent<HTMLButtonElement>) => void
}

function ParkingInfo(props: ParkingInfoProps) {
  const { parkId, start, isLive, onClickLiveButton } = props
  const { color, name, feeRates } = parkConfig[parkId]

  const [renderController, setRenderController] = useState(false)

  const { duration, fee } = useMemo(
    (): { duration: number; fee: number } => {
      const ms = getDuration(start)
      const newDurationHrs = msToHrs(ms)
      return {
        duration: ms,
        fee: calculateFee(feeRates, newDurationHrs),
      }
    },
    // renderController is unused, but I'm using it to trigger re-rendering from setTimeout
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [feeRates, start, renderController],
  )

  // live update fee/duration
  useEffect(() => {
    let timeoutId: number
    if (isLive) {
      timeoutId = window.setTimeout(() => {
        setRenderController(!renderController)
      }, 1000)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isLive, renderController])

  return (
    <div className="parking-info-container" data-testid="ParkInfo">
      <button
        className={clsx('live-button', isLive && '-live')}
        onClick={onClickLiveButton}
        data-testid="LiveButton"
      >
        LIVE
      </button>
      <h2 className="parking-at" style={{ color }}>
        {name}
      </h2>
      <div className="park-info -start">
        <span className="label">Check-in:</span>{' '}
        <strong>{start.toLocaleString()}</strong>
      </div>
      <div className="park-info -duration">
        <span className="label">Duration:</span>{' '}
        <strong>{formatDuration(duration)}</strong>
      </div>
      <div className="park-info -fee">
        <span className="label">Total: </span>
        <span className="fee" style={{ color: COLORS.GREEN }}>
          {fee.toLocaleString('en-TH', { style: 'currency', currency: 'THB' })}
        </span>
      </div>
    </div>
  )
}

export default ParkingInfo
