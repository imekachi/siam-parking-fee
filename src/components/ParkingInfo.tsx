import React from 'react'
import COLORS from '../config/colors'
import './ParkInfo.css'

interface Props {
  name: string
  color: string
  start: Date
  durationHrs: number
  fee: number
  isLive?: boolean
  onClickLiveButton?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function ParkingInfo(props: Props) {
  const { name, color, start, durationHrs, fee, isLive, onClickLiveButton } = props
  return (
    <div className="parking-info-container">
      <button className={`live-button${isLive ? ' -live' : ''}`} onClick={onClickLiveButton}>
        LIVE
      </button>
      <h2 className="parking-at" style={{ color }}>
        {name}
      </h2>
      <div className="park-info -start">
        <span className="label">Check-in:</span> <strong>{start.toLocaleString()}</strong>
      </div>
      <div className="park-info -duration">
        <span className="label">Duration:</span> <strong>{durationHrs.toLocaleString()} hrs</strong>
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
