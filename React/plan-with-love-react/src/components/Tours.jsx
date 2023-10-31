import React from 'react'
import Card from './Card'

export default function Tours({ tours, removeTourHandle }) {
  return (
    <div className="container">
      <h2 className="title">Plan with Love</h2>
      <div className="cards">
        {tours.map((tour) => {
          return (
            <Card
              key={tour.id}
              {...tour}
              removeTourHandle={removeTourHandle}
            ></Card>
          )
        })}
      </div>
    </div>
  )
}
