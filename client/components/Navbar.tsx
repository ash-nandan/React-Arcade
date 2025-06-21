import React from 'react'
import { Link } from 'react-router-dom'
import '../main.css'

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          React Arcade
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/scattergories">Scattergories</Link>
          </li>
          <li>
            <Link to="/emojiparty">Emoji Party</Link>
          </li>
          <li>
            <Link to="/emojimovie">Emoji Movie</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
