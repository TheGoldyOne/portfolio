import React from 'react'

import './Title.scss'
import { FaAngleRight } from 'react-icons/fa'

export default function Title ({ title }: { title: string}) {
  return (
    <div className="title">
      <div className="arrows">
        <FaAngleRight />
        <FaAngleRight />
      </div>
      {title}
    </div>
  )
}
