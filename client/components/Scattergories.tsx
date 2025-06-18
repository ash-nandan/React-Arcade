import GameForm from './ScattergoriesForm'

function Scattergories() {
  return (
    <>
      <div>
        <h2>Scattergories</h2>
        <ul>
          <li>
            Give an answer that starts with your chosen letter for each category
          </li>
          <li>Submit to check against your competitors</li>
          <li>You receive a point for every unique answer you have</li>
          <li>
            Any answers that match another competitors answers do not receive a
            point
          </li>
          <li>Tip: think creatively</li>
        </ul>
      </div>
      <>
        <GameForm />
      </>
    </>
  )
}

export default Scattergories
