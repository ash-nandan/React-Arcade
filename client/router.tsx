import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Scattergories from './components/Scattergories'
import Results from './components/ScattergoriesResult'
import EmojiParty from './components/EmojiParty'
import EmojiMovie from './components/EmojiMovie'
import Review from './components/Review'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="scattergories" element={<Scattergories />} />
    <Route path="scattergories/results" element={<Results />} />
    <Route path="emojiparty" element={<EmojiParty />} />
    <Route path="emojimovie" element={<EmojiMovie />} />
    <Route path="review" element={<Review />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
