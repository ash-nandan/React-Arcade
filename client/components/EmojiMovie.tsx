import React, { useState, useCallback } from 'react'
import type { KeyboardEvent } from 'react'
import '../main.css'

type Movie = {
  emoji: string
  title: string
  hint?: string
}

interface GameState {
  score: number
  attempts: number
  showHint: boolean
  gameCompleted: boolean
}

const movies: Movie[] = [
  {
    emoji: '🦁👑',
    title: 'The Lion King',
    hint: 'Disney animated movie about African wildlife',
  },
  {
    emoji: '🚢🧊💔',
    title: 'Titanic',
    hint: 'Based on a real historic shipwreck',
  },
  {
    emoji: '🧑‍🚀🌌',
    title: 'Interstellar',
    hint: 'Space exploration and time dilation',
  },
  {
    emoji: '🧙‍♂️💍🔥',
    title: 'The Lord of the Rings',
    hint: 'Fantasy epic about a powerful ring',
  },
  {
    emoji: '🕷️🧑',
    title: 'Spiderman',
    hint: 'Superhero bitten by a radioactive arachnid',
  },
]

const MAX_ATTEMPTS = 3

const EmojiMovie: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState('')
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    attempts: MAX_ATTEMPTS,
    showHint: false,
    gameCompleted: false,
  })

  const checkAnswer = useCallback(() => {
    const currentMovie = movies[currentIndex]
    const isCorrect =
      guess.toLowerCase().trim() === currentMovie.title.toLowerCase()

    if (isCorrect) {
      setFeedback('Correct! 🎉')
      setGameState((prev) => ({
        ...prev,
        score: prev.score + 1,
        attempts: MAX_ATTEMPTS,
      }))
    } else {
      const remainingAttempts = gameState.attempts - 1
      setGameState((prev) => ({
        ...prev,
        attempts: remainingAttempts,
        showHint: remainingAttempts === 1,
      }))

      if (remainingAttempts === 0) {
        setFeedback(`Game Over! The movie was "${currentMovie.title}"`)
        setGameState((prev) => ({ ...prev, gameCompleted: true }))
      } else {
        setFeedback(
          `Wrong guess! ${remainingAttempts} ${
            remainingAttempts === 1 ? 'try' : 'tries'
          } left`,
        )
      }
    }
  }, [guess, currentIndex, gameState.attempts])

  const nextMovie = useCallback(() => {
    const nextIndex = (currentIndex + 1) % movies.length
    setCurrentIndex(nextIndex)
    setGuess('')
    setFeedback('')
    setGameState((prev) => ({
      ...prev,
      attempts: MAX_ATTEMPTS,
      showHint: false,
      gameCompleted: nextIndex === 0 && prev.gameCompleted,
    }))
  }, [currentIndex])

  const resetGame = useCallback(() => {
    setCurrentIndex(0)
    setGuess('')
    setFeedback('')
    setGameState({
      score: 0,
      attempts: MAX_ATTEMPTS,
      showHint: false,
      gameCompleted: false,
    })
  }, [])

  const handleKeyPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && guess.trim()) {
        checkAnswer()
      }
    },
    [checkAnswer, guess],
  )

  const progress = `${currentIndex + 1}/${movies.length}`
  const currentMovie = movies[currentIndex]

  return (
    <div className="game-container" role="main">
      <header>
        <h1 className="header">Guess the Movie</h1>
        <p className="score" role="status">
          Score: {gameState.score} | Progress: {progress}
        </p>
        <p className="attempts" role="status">
          Attempts remaining: {gameState.attempts}
        </p>
      </header>

      <div
        className="emoji"
        role="img"
        aria-label={`Movie emoji: ${currentMovie.emoji}`}
      >
        {currentMovie.emoji}
      </div>

      {gameState.showHint && (
        <p className="hint" role="alert">
          Hint: {currentMovie.hint}
        </p>
      )}

      <div className="input-container">
        <label htmlFor="movie-guess" className="visually-hidden">
          Enter your movie guess
        </label>
        <input
          id="movie-guess"
          className="input"
          type="text"
          placeholder="Type your guess..."
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyPress={handleKeyPress}
          aria-label="Movie guess input"
          disabled={gameState.gameCompleted}
        />
        <button
          className="btn"
          onClick={checkAnswer}
          disabled={!guess.trim() || gameState.gameCompleted}
          aria-label="Submit guess"
        >
          Submit
        </button>
      </div>

      {feedback && (
        <p className="feedback" role="alert">
          {feedback}
        </p>
      )}

      {(feedback === 'Correct! 🎉' || gameState.gameCompleted) && (
        <div className="action-buttons">
          {currentIndex < movies.length - 1 && (
            <button
              className="btn next-btn"
              onClick={nextMovie}
              aria-label="Next movie"
            >
              Next Movie
            </button>
          )}
          <button
            className="btn reset-btn"
            onClick={resetGame}
            aria-label="Reset game"
          >
            Reset Game
          </button>
        </div>
      )}
    </div>
  )
}

export default EmojiMovie
