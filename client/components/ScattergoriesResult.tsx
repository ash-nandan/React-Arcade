import { useLocation } from 'react-router'
import sgLists from '../../data/sgLists'
import sgPlayerAnswers from '../../data/sgPlayerAnswers'

export default function Results() {
  const location = useLocation()
  const playerOne = location.state.answer
  const letter = location.state.letter
  //new learning: useLocation is a react-router tool that gives you an object that contains everything about where the user is in your app. The important bit it contains for the results is the navigation state that was passed from the gameForm when submit is clicked. Kind of like a window into the router's memory. We reference the state key here and it brings in the answer info for us

  const playerTwo = sgPlayerAnswers[letter][0]
  const playerThree = sgPlayerAnswers[letter][1]

  return (
    <div>
      <h2 className="gameForm info">The Results Are In!</h2>
      <div className="gameForm info">
        <li>Check your answers against other players</li>
        <li>Remember, you receive a point for every unique answer you have</li>
        <li>Any matching answers with other players do NOT receive a point</li>
      </div>
      <div className="gameForm resultContainer">
        {Object.entries(sgLists[0]).map(([cat, value]) => (
          <div key={cat}>
            <h3>{value}</h3>
            <p>
              <strong>Your Answer: {playerOne[cat]}</strong>
            </p>
            <p>Player 2: {playerTwo[cat]}</p>
            <p>Player 3: {playerThree[cat]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
