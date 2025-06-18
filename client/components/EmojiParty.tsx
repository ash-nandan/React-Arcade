import Emoji from './Emoji'
import { useEffect, useState } from 'react'

function EmojiParty() {
  const gridSize = 9
  const [emojiGrid, setEmojiGrid] = useState<string[]>(() =>
    Array.from({ length: gridSize }, () => getRandomEmoji()),
  )
  const [timeLeft, setTimeLeft] = useState(30)
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

      {hasFailed && !hasWon && <h2> </h2>}

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
            onClick={() => {
              setEmojiGrid((prev) => {
                const copy = [...prev]
                copy[i] = getRandomEmoji()
                return copy
              })
            }}
            disabled={hasFailed || hasWon}
          />
        ))}
      </section>
    </>
  )
}

export default EmojiParty
