import React from 'react'
import NavBar from './Navbar'
import Cards from './Cards'
import '../main.css'

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: '4rem' }}>
        <Cards title="Scattergories" description="This is a game" />
        <Cards title="Emoji Party" description="This is a game" />
        <Cards title="Emoji Movie" description="This is a game" />
      </div>
    </div>
  )
}

export default Home
