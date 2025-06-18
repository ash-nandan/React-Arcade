import { useState } from 'react'
import sgLists from '../../data/sgLists'

export default function GameForm() {
  const [answer, setAnswer] = useState(
    Object.keys(sgLists).reduce((acc, cat) => {
      acc[cat] = ''
      return acc
    }),
    //new learning: Object.keys used with .reduce lets you build a new object with the same keys but different values (ie cat1: '')
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Submitting:', answer)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value)
    console.log('Text changed:', event.target.value)
  }

  return (
    <div>
      <h3>Your chosen letter is P</h3>
      <div className="gameForm">
        <form onSubmit={handleSubmit}>
          {Object.entries(sgLists).map(([cat, value]) => (
            <div key={cat} className="singleForm">
              <label htmlFor={cat}>{value}</label>
              <input
                onChange={handleChange}
                type="text"
                name={cat}
                id={cat}
                value={answer}
              />
            </div>
          ))}

          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
