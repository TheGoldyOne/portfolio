import React from 'react'

import './Technology.scss'

export default function Technology ({ name, image }: { name: string, image: any }) {
  return (
    <div className="item">
      <img src={image} alt={`${name}'s logo`}/>
      <h2>{name}</h2>
    </div>
  )
}
