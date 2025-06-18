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
      <h1 style={{ color: 'white', textAlign: 'center' }}>React Arcade🎉</h1>
      <EmojiParty />
    </div>
  )
}

export default App
