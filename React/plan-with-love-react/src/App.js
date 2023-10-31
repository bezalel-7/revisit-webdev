import React, { useState } from 'react'
import Tours from './components/Tours'
import data from './data'
const App = () => {
  const [tours, SetTours] = useState(data)
  function removeTourHandle(id) {
    const newTours = tours.filter((tour) => tour.id != id)
    SetTours(newTours)
  }
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => SetTours(data)}>
          Refresh
        </button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTourHandle={removeTourHandle}></Tours>
    </div>
  )
}

export default App
