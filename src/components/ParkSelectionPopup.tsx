import React, { MouseEventHandler } from 'react'
import { parkConfigEntries } from '../config/park'
import './ParkSelectionPopup.css'

interface ParkSelectorPopupProps {
  onChoosePark?: MouseEventHandler<HTMLLIElement>
  onClickBackdrop?: MouseEventHandler<HTMLDivElement>
}

function ParkSelectionPopup({ onChoosePark, onClickBackdrop }: ParkSelectorPopupProps) {
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

export default ParkSelectionPopup
