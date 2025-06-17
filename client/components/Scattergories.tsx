function Scattergories() {
  return (
    <div>
      <h2>Scattergories</h2>
      <ul>
        <li>
          Fill in each catergory with an answer that starts with your randomly
          chosen letter
        </li>
        <li>
          Once done, submit your answers to check against your two competitors
        </li>
        <li>The aim: you receive a point for every unique answer you have</li>
        <li>
          Any answers that match another competitors answers do not receive a
          point
        </li>
        <li>
          Tip: think outside the box while still using the correct starting
          letter
        </li>
      </ul>
      <h3>Your randomly chosen letter is P</h3>
      <>
        <form>
          <label htmlFor="cat1">A boy&apos;s name </label>
          <input />
          <label htmlFor="cat2">Gifts </label>
          <input />
          <button>Submit</button>
        </form>
      </>
    </div>
  )
}

export default Scattergories
