import Emoji from './Emoji'

function EmojiParty() {
  const gridArray = new Array(9).fill(0) //3x3 grid

  return (
    <>
      <h2 style={{ color: 'white', textAlign: 'center' }}>
        🎨Tiny Games, Big Fun!!
      </h2>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          marginTop: '2rem',
          maxWidth: '40rem',
          marginInline: 'auto',
        }}
      >
        {gridArray.map((_, i) => (
          <Emoji key={i} />
        ))}
      </section>
    </>
  )
}

export default EmojiParty
