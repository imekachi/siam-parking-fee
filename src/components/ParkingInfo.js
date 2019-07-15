import PropTypes from 'prop-types'
import React from 'react'
import COLORS from '../config/colors'
import './ParkInfo.css'

function ParkingInfo(props) {
  const { name, color, start, durationHrs, fee } = props
  return (
    <div className="parking-info-container">
      <h2 className="parking-at" style={{ color: color }}>
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

ParkingInfo.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  start: PropTypes.instanceOf(Date),
  durationHrs: PropTypes.instanceOf(Date),
  fee: PropTypes.number,
}

export default ParkingInfo
