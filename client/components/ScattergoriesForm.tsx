import { useState } from 'react'
import { useNavigate } from 'react-router'
import sgLists from '../../data/sgLists'

interface AnswerArray {
  [key: string]: string
}

export default function GameForm() {
  const navigate = useNavigate()
  const [answer, setAnswer] = useState<AnswerArray>(
    Object.keys(sgLists).reduce<AnswerArray>((obj, cat) => {
      obj[cat] = ''
      return obj
    }, {}),

    //new learning: Object.keys used with .reduce lets you build a new object with the same keys but different values (ie cat1: '')
    //new learning: <AnswerArray> is syntax for a type argument. Using it with useState is saying the state will hold an object thats like AnswerArray. Using it with reduce tells typescript I'm creating an object in the style of AnswerArray
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Submitting:', answer)
    navigate('/scattergories/results', { state: answer })
    //new learning: useNavigate is used for navigation inside the code (like in a function) after something has happened, like a form submit we have here. It's placed in the component logic rather than in the return like a <Link />
    //new learning: { state: answer } is a navigation state that lets you send extra information along with the URL your navigating to, like an extra data package. We use in conjuction with react's useLocation function
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name
    const value = event.target.value
    //reminder: we have multiple answers so these constants can help figure out which category and answer the user is typing into
    setAnswer((current) => ({
      ...current,
      [key]: value,
    }))
  }

  return (
    <div>
      <h2 className="gameForm letter">Your chosen letter is P</h2>
      <div>
        <form className="gameForm resultContainer" onSubmit={handleSubmit}>
          {Object.entries(sgLists[0]).map(([cat, value]) => (
            //new learning: had to index 0 as sgLists is an array of objects. I made it an array to try and design with extensibility in mind. Would need to refactor if other list objects were added to the array and wanted to choose one randomly for example
            <div key={cat} className="singleForm">
              <label htmlFor={cat}>{value}</label>
              <input
                onChange={handleChange}
                type="text"
                name={cat}
                id={cat}
                value={answer[cat]}
              />
            </div>
          ))}

          <button className="submitButton">Submit</button>
        </form>
      </div>
    </div>
  )
}
