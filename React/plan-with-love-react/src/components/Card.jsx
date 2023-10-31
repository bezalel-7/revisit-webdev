import React, { useState } from 'react'

export default function Card({
  id,
  name,
  image,
  info,
  price,
  removeTourHandle,
}) {
  const [readmore, SetReadmore] = useState(false)
  const description = readmore ? info : `${info.substring(0, 200)}....`
  function readMoreHandler() {
    SetReadmore(!readmore)
  }

  return (
    <div className="card">
      <img src={image} className="image" />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readMoreHandler}>
            {readmore ? 'show less' : 'read more'}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => removeTourHandle(id)}>
        Not Interseted
      </button>
    </div>
  )
}
