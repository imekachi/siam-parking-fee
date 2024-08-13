import { MouseEventHandler } from 'react'
import { parkConfigEntries } from '../config/park'
import './ParkSelectionPopup.css'

interface ParkSelectionPopupProps {
  onChoosePark?: MouseEventHandler<HTMLLIElement>
  onClickBackdrop?: MouseEventHandler<HTMLDivElement>
}

function ParkSelectionPopup({
  onChoosePark,
  onClickBackdrop,
}: ParkSelectionPopupProps) {
  return (
    <>
      <div
        className="backdrop"
        onClick={onClickBackdrop}
        data-testid="ParkSelectionPopupBackdrop"
      />
      <section className="popup" data-testid="ParkSelectionPopup">
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
