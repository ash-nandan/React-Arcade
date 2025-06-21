import React from 'react'
import '../main.css'

interface CardProps {
  title: string
  description: string
}

// this will contain the links for our mini games

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-buttons">
        <button className="card-button primary">Play</button>
        <button className="card-button secondary">placeholder</button>
      </div>
    </div>
  )
}

export default Card
