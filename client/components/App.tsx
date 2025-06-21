import { Outlet } from 'react-router'
import NavBar from './Navbar'

import EmojiParty from './EmojiParty'

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: 'url("/assets/7392521.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        paddingTop: '5rem',
      }}
    >
      <header className="header">REACT ARCADE</header>

      <h2 className="header subHeader">Tiny games. Big Fun</h2>
      <NavBar />
      <header className="header" style={{ marginTop: '2rem' }}>
        REACT ARCADE
      </header>
      <h2 className="header subHeader">Tiny games, Big Fun!</h2>
      <Outlet />
    </div>
  )
}

export default App
