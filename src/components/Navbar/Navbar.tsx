import React, { useEffect } from 'react'
import './Navbar.scss'
import Button from '../Button/Button'

export default function Navbar () {
  const [scrolled, setScrolled] = React.useState(false)

  const handleScroll = () => {
    if (window.scrollY >= 66) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Button size="small">My Resume</Button>
      <ul>
        <li>
          <a href="#" className="hover">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
