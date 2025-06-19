import { useState } from 'react'
import sgLists from '../../data/sgLists'
import sgPlayerAnswers from '../../data/sgPlayerAnswers'

export default function Results() {
  const playerTwo = sgPlayerAnswers[0]
  const playerThree = sgPlayerAnswers[1]

  return (
    <div>
      <h2>The Results Are In!</h2>
      <ul>
        <li>Check your answers against other players</li>
        <li>Remember, you receive a point for every unique answer you have</li>
        <li>Any matching answers with other players do NOT receive a point</li>
      </ul>
      {Object.entries(sgLists[0]).map(([cat, value]) => (
        <div key={cat}>
          <h3>{value}</h3>
          <p>Player 2: {playerTwo[cat]}</p>
          <p>Player 3: {playerThree[cat]}</p>
        </div>
      ))}
    </div>
  )
}
