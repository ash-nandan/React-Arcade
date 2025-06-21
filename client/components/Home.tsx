import React from 'react'
import NavBar from './Navbar'
import Cards from './Cards'
import '../main.css'

const Home: React.FC = () => {
  return (
    <div>
      <h2 className="home-title">React Arcade</h2>
      <p className="home-tagline">Tiny games, Big Fun!</p>
      <NavBar />
      <Cards
        title="Scattergories"
        description="Categories, one letter, limited time. How many can you name?"
        PlayLink="/Scattergories"
      />
      <Cards
        title="Emoji Party"
        description="Match all the emoji's before the time runs out!"
        PlayLink="/emojiparty"
      />
      <Cards
        title="Emoji Movie"
        description="Can you guess the movie?"
        PlayLink="/"
      />
    </div>
  )
}

export default Home
