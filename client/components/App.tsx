import { Outlet } from 'react-router'
import NavBar from './Navbar'

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: 'url("/assets/vectorstock_47010306.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        paddingTop: '5rem',
      }}
    >
      <h2 className="header subHeader">Tiny games. Big Fun</h2>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
