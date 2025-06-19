import { motion, AnimatePresence } from 'framer-motion'

type EmojiProps = {
  emoji: string
  onClick: () => void
  disabled: boolean
}

function Emoji({ emoji, onClick, disabled }: EmojiProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
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
          key={emoji}
          initial={{ scale: 0 }}
          animate={{ scale: 1.5 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring' as const, stiffness: 400, damping: 30 }}
        >
          {emoji}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default Emoji
