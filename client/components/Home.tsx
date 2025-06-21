import React from 'react'
import NavBar from './Navbar'
import Cards from './Cards'
import '../main.css'

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: '4rem' }}>
        <Cards
          title="Scattergories"
          description="Categories, one letter, limited time. How many can you name?"
          PlayLink="/scattergories"
        />
        <Cards
          title="Emoji Party"
          description="Match all the emoji's before the time runs out!"
          PlayLink="/emojiparty"
        />
        <Cards
          title="Emoji Movie"
          description="Can you guess the movie?"
          PlayLink="/emojimovie"
        />
      </div>
    </div>
  )
}

export default Home
