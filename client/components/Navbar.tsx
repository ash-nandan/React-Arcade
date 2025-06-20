import React, { useState } from 'react'
import '../main.css'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // still trying to figure out the hamburger style responsiveness

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">React Arcade</div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Games</a>
          </li>
          <li>
            <a href="#about">Games</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
