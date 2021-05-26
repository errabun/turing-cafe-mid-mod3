import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'

const Reservations = ({ reservations }) => {

  const resyDisplay = reservations.map(reservation => {
    return (
      <Card
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        number={reservation.number}
        time={reservation.time}
      />
    )
  })

  return (
    <div className='resy-container'>
      {resyDisplay}
    </div>
  )
}


export default Reservations
