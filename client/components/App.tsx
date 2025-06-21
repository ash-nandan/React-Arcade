import { Outlet } from 'react-router'

import EmojiParty from './EmojiParty'

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/premium-photo/pixel-art-game-backgrounds-game-background_670382-252300.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <header className="header">REACT ARCADE</header>

      <h2 className="header subHeader">Tiny games. Big Fun</h2>
      <Outlet />

      <h2 style={{ color: 'black', textAlign: 'center' }}>
        Pick an emoji, any emoji and match them all!!
      </h2>
      <Outlet />

      <EmojiParty />
    </div>
  )
}

export default App
