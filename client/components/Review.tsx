import { useState } from 'react'
import '../main.css'

export default function CheckboxForm() {
  const [list, setList] = useState<boolean[]>([])
  const [checkBox, setCheckBox] = useState(false)
  const [checkBox2, setCheckBox2] = useState(false)
  const [showResponse, setShowResponse] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setList((prevList) => [...prevList, checkBox, checkBox2])

    setShowResponse(true)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckBox(event.target.checked)
    setCheckBox2(false)
    setShowResponse(false)
    console.log('Checkbox changed:', event.target.checked)
  }

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckBox2(event.target.checked)
    setCheckBox(false)
    setShowResponse(false)
    console.log('Checkbox changed:', event.target.checked)
  }
  const getResponse = () => {
    if (checkBox) {
      return "Great! we're glad you enjoyed them!"
    } else if (checkBox2) {
      return "Are you sure you didn't mean yes?"
    }
  }

  return (
    <>
      <label htmlFor="checkbox" className="header submit">
        Did you enjoy our games?
      </label>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px',
          margin: '20px 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <label className="header subHeader" htmlFor="checkbox">
            Yes
          </label>
          <input
            onChange={handleChange}
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={checkBox}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <label className="header subHeader" htmlFor="checkbox2">
            No
          </label>
          <input
            onChange={handleChange2}
            type="checkbox"
            name="checkbox2"
            id="checkbox2"
            checked={checkBox2}
          />
        </div>

        <button
          type="submit"
          className="button"
          onClick={handleSubmit}
          disabled={!checkBox && !checkBox2}
        >
          Submit
        </button>
      </div>

      {showResponse && (
        <div className="submit header subHeader">
          <h3>Our Response:</h3>
          <p className="text-gray-700">{getResponse()}</p>
        </div>
      )}
    </>
  )
}
