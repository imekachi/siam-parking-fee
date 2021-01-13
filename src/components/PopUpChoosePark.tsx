import React from 'react'
import { parkConfigEntries } from '../config/park'
import './PopUpChoosePark.css'

interface Props {
  onChoosePark?: (event: React.MouseEvent<HTMLLIElement>) => void
  onClickBackdrop?: (event: React.MouseEvent<HTMLDivElement>) => void
}

function PopUpChoosePark(props: Props) {
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

export default PopUpChoosePark
