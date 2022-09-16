import React from 'react'

import './Button.scss'

export default function Button ({ mode, size, children }: {mode?: string, size?: string, children?: any}) {
  return (
    <button className={`${mode} ${size}`}>{children}</button>
  )
}
