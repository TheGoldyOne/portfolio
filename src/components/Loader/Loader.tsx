import React, { useEffect } from 'react'

import './Loader.scss'

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const showscreen = async (number: number) => {
  if (number === 0) return true
  const element = document.getElementById(`L${number}`)
  if (element) {
    element.style.top = '-100vh'
  }
  await sleep(100)
  showscreen(number - 1)
}

export default function Loader () {
  useEffect(() => {
    showscreen(3)
  }, [])

  return (
    <div>
      <div className="loader" id="L1"></div>
      <div className="loader" id="L2"></div>
      <div className="loader" id="L3"></div>
    </div>
  )
}
