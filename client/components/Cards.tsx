import React from 'react'
import { Link } from 'react-router-dom'
import '../main.css'

interface CardProps {
  title: string
  description: string
  PlayLink: string
}

// this will contain the links for our mini games

const Card: React.FC<CardProps> = ({ title, description, PlayLink }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-buttons">
        <Link to={PlayLink} className="card-button primary">
          Play
        </Link>
        <button className="card-button secondary">placeholder</button>
      </div>
    </div>
  )
}

export default Card
