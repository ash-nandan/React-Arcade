import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../main.css'

interface CardProps {
  title: string
  description: string
}

// this will contain the links for our mini games

const Card: React.FC<CardProps> = ({ title, description }) => {
  const navigate = useNavigate()

  const handlePlay = () => {
    if (title === 'Emoji Movie') {
      navigate('/emojimovie')
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-buttons">
        <button className="card-button primary" onClick={handlePlay}>
          Play
        </button>
        <button className="card-button secondary">placeholder</button>
      </div>
    </div>
  )
}

export default Card
