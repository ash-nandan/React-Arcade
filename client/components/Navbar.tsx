import React from 'react'
import '../main.css'

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">React Arcade</div>
        <ul className="navbar-menu">
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
