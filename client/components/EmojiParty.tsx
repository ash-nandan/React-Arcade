import Emoji from './Emoji'
import { useEffect, useState } from 'react'

function EmojiParty() {
  const gridSize = 9

  const generateGrid = () =>
    Array.from({ length: gridSize }, () => getRandomEmoji())

  const [emojiGrid, setEmojiGrid] = useState<string[]>(generateGrid)
  const [timeLeft, setTimeLeft] = useState(25)
  const [hasFailed, setHasFailed] = useState(false)
  const [hasWon, setHasWon] = useState(false)

  function getRandomEmoji() {
    const emojiList = ['😎', '🤥', '🤩', '😜']
    const randomIndex = Math.floor(Math.random() * emojiList.length)
    return emojiList[randomIndex]
  }

  useEffect(() => {
    if (timeLeft <= 0 && !hasWon) {
      setHasFailed(true)
      return
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, hasWon])

  //check if all emojis match
  useEffect(() => {
    if (emojiGrid.every((e) => e === emojiGrid[0])) {
      setHasWon(true)
    }
  }, [emojiGrid])

  const handleEmojiClick = (index: number) => {
    if (hasFailed || hasWon) return
    const newGrid = [...emojiGrid]
    newGrid[index] = getRandomEmoji()
    setEmojiGrid(newGrid)
  }

  const restartGame = () => {
    setEmojiGrid(generateGrid())
    setTimeLeft(25)
    setHasFailed(false)
    setHasWon(false)
  }

  return (
    <>
      <h1
        style={{ color: 'black', textAlign: 'right', marginBottom: '0.5rem' }}
      >
        ⏱ Time Left: {timeLeft}s
      </h1>
      {hasWon && (
        <h2 style={{ color: 'green', textAlign: 'center' }}>YOU WIN!!🎉</h2>
      )}

      {(hasFailed || hasWon) && (
        <div style={{ textAlign: 'right' }}>
          <button
            onClick={restartGame}
            style={{
              fontSize: '1.2rem',
              padding: '0.5rem, 1.5rem',
              backgroundColor: 'gray',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Restart Game
          </button>
        </div>
      )}

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
        {emojiGrid.map((emoji, i) => (
          <Emoji
            key={i}
            emoji={hasFailed ? '☠' : emoji}
            onClick={() => handleEmojiClick(i)}
            disabled={hasFailed || hasWon}
          />
        ))}
      </section>
    </>
  )
}

export default EmojiParty
