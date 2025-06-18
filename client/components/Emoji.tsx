import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const emojiList = [
  '😎',
  '🤥',
  '🤓',
  '🤩',
  '😜',
  '🤣',
  '😇',
  '🤠',
  '🥱',
  '🤯',
  '😱',
  '🥰',
  '😒',
  '😭',
  '🤬',
  '🥶',
  '😴',
  '🤒',
  '☠',
  '🥳',
]

function Emoji() {
  const [emoji, setEmoji] = useState(getRandomEmoji())
  const [emojiKey, setEmojiKey] = useState(0)

  function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojiList.length)
    return emojiList[randomIndex]
  }

  const handleClick = () => {
    setEmoji(getRandomEmoji())
    setEmojiKey((prev) => prev + 1)
  }

  return (
    <button
      className="emojis"
      onClick={handleClick}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        width: '10rem',
        height: '10rem',
        fontSize: '5rem',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        margin: '0.5rem',
      }}
      aria-label="Emoji"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={emojiKey}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring' as const, stiffness: 300, damping: 15 }}
        >
          {emoji}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default Emoji
