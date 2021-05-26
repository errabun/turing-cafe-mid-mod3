import React from 'react'
import './Card.css'

const Card = ({ id, name, time, date, number }) => {

  return (
    <div className='resy-card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Card
