function Scattergories() {
  return (
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
      <h3>Your chosen letter is P</h3>
      <div className="gameForm">
        <form>
          <div className="singleForm">
            <label htmlFor="cat1">1. A boy&apos;s name </label>
            <input id="cat1" />
          </div>
          <div className="singleForm">
            <label htmlFor="cat2">2. Gifts </label>
            <input id="cat2" />
          </div>
          <div className="singleForm">
            <label htmlFor="cat3">3. An animal </label>
            <input id="cat3" />
          </div>
          <div className="singleForm">
            <label htmlFor="cat4">4. Things that are cold </label>
            <input id="cat4" />
          </div>
          <div className="singleForm">
            <label htmlFor="cat5">5. Colours </label>
            <input id="cat5" />
          </div>
          <div className="singleForm">
            <label htmlFor="cat6">6. Breakfast foods </label>
            <input id="cat6" />
          </div>
          <div className="singleForm">
            <label htmlFor="cat7">7. Things at the beach </label>
            <input id="cat7" />
          </div>
          <div className="singleForm">
            <label htmlFor="cat8">8. Movie titles </label>
            <input id="cat8" />
          </div>
          <div className="singleForm">
            <label htmlFor="cat9">9. Cities </label>
            <input id="cat9" />
          </div>
          <div className="singleForm">
            <label htmlFor="cat10">10. Musical instruments </label>
            <input id="cat10" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Scattergories
