import React from 'react'
import PropTypes from 'prop-types'
import { parkConfigEntries } from '../config/park'
import './PopUpChoosePark.css'

function PopUpChoosePark(props) {
  const { onChoosePark, onClickBackdrop } = props
  return (
    <>
      <div className="backdrop" onClick={onClickBackdrop} />
      <section className="popup">
        <div className="popup-header">Where are you parking at?</div>
        <ul className="park-list">
          {parkConfigEntries.map(([key, info]) => (
            <li
              key={key}
              data-park-id={key}
              className="park-list-item _prevent-selection"
              onClick={onChoosePark}
            >
              {info.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

PopUpChoosePark.propTypes = {
  onChoosePark: PropTypes.func,
  onClickBackdrop: PropTypes.func,
}

export default PopUpChoosePark
