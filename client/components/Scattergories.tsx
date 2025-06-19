import GameForm from './ScattergoriesForm'

function Scattergories() {
  return (
    <>
      <div>
        <h1 className="title">Scattergories</h1>
        <div className="gameForm instructions">
          <h3>
            Give an answer for each item below that starts with your chosen
            letter...BUT, be creative. You receive one point for every unique
            answer that doesn&apos;t match the other players. Submit your
            answers once you&apos;re done and see how you went against your
            opponents.
          </h3>
        </div>
      </div>
      <>
        <GameForm />
      </>
    </>
  )
}

export default Scattergories
