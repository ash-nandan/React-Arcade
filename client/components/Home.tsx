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
      <Cards title="Game 1" description="This is a game" />
      <Cards title="Game 2" description="This is a game" />
      <Cards title="Game 3" description="This is a game" />
    </div>
  )
}

export default Home
